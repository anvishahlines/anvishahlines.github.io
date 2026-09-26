/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WorksList } from './components/WorksList';
import { ProjectGallery } from './components/ProjectGallery';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { HomeView } from './components/HomeView';
import { ArtworkModal } from './components/ArtworkModal';
import { WORK_CATEGORIES, ARTIST_PROFILE } from './data/portfolioData';
import { Artwork } from './types/portfolio';

function parseUrlToView(): { view: 'home' | 'works' | 'category' | 'about' | 'contact'; categoryId: string } {
  if (typeof window === 'undefined') return { view: 'home', categoryId: 'nature-of-things' };
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  
  if (pathname === '/about') return { view: 'about', categoryId: 'nature-of-things' };
  if (pathname === '/contact') return { view: 'contact', categoryId: 'nature-of-things' };
  if (pathname === '/works') return { view: 'works', categoryId: 'nature-of-things' };
  
  if (pathname.startsWith('/works/')) {
    const catId = pathname.replace('/works/', '');
    const found = WORK_CATEGORIES.some(c => c.id === catId);
    if (found) return { view: 'category', categoryId: catId };
  }

  // Also support hash fallback e.g. #/about or ?page=about if redirected
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash === 'about') return { view: 'about', categoryId: 'nature-of-things' };
  if (hash === 'contact') return { view: 'contact', categoryId: 'nature-of-things' };
  if (hash === 'works') return { view: 'works', categoryId: 'nature-of-things' };
  if (hash.startsWith('works/')) {
    const catId = hash.replace('works/', '');
    if (WORK_CATEGORIES.some(c => c.id === catId)) return { view: 'category', categoryId: catId };
  }

  return { view: 'home', categoryId: 'nature-of-things' };
}

export default function App() {
  const [route, setRoute] = useState(() => parseUrlToView());
  const [modalArtwork, setModalArtwork] = useState<Artwork | null>(null);

  const currentView = route.view;
  const selectedCategoryId = route.categoryId;

  useEffect(() => {
    const onPopState = () => {
      setRoute(parseUrlToView());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const updateUrl = (url: string, newRoute: { view: 'home' | 'works' | 'category' | 'about' | 'contact'; categoryId: string }) => {
    try {
      window.history.pushState({}, '', url);
    } catch {
      // Ignore in iframe sandboxes if restricted
    }
    setRoute(newRoute);
  };

  const handleNavigate = (view: string, categoryId?: string) => {
    if (view === 'category' && categoryId) {
      updateUrl(`/works/${categoryId}`, { view: 'category', categoryId });
    } else if (view === 'works') {
      updateUrl('/works', { view: 'works', categoryId: 'nature-of-things' });
    } else if (view === 'about') {
      updateUrl('/about', { view: 'about', categoryId: 'nature-of-things' });
    } else if (view === 'contact') {
      updateUrl('/contact', { view: 'contact', categoryId: 'nature-of-things' });
    } else {
      updateUrl('/', { view: 'home', categoryId: 'nature-of-things' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    updateUrl(`/works/${categoryId}`, { view: 'category', categoryId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCategory = WORK_CATEGORIES.find((c) => c.id === selectedCategoryId) || WORK_CATEGORIES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917]">
      {/* Header: ANVI STEVENS (functions as Home) + Navigation (Works, Bio+CV, Contact) */}
      <Header
        currentView={currentView}
        onNavigate={(view) => handleNavigate(view)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView onNavigateToWorks={() => handleNavigate('works')} />
        )}

        {currentView === 'works' && (
          <WorksList
            categories={WORK_CATEGORIES}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentView === 'category' && (
          <ProjectGallery
            category={activeCategory}
            onBackToWorks={() => handleNavigate('works')}
            onOpenArtworkModal={(artwork) => setModalArtwork(artwork)}
          />
        )}

        {currentView === 'about' && (
          <AboutView profile={ARTIST_PROFILE} />
        )}

        {currentView === 'contact' && (
          <ContactView
            email={ARTIST_PROFILE.email}
            location={ARTIST_PROFILE.location}
          />
        )}
      </main>

      {/* Artwork Inspection Lightbox Modal */}
      <ArtworkModal
        artwork={modalArtwork}
        onClose={() => setModalArtwork(null)}
      />

      {/* Footer */}
      <Footer onNavigate={(view) => handleNavigate(view)} />
    </div>
  );
}
