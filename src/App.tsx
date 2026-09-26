/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
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

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'works' | 'category' | 'about' | 'contact'>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('nature-of-things');
  const [modalArtwork, setModalArtwork] = useState<Artwork | null>(null);

  const handleNavigate = (view: string, categoryId?: string) => {
    if (view === 'category' && categoryId) {
      setSelectedCategoryId(categoryId);
      setCurrentView('category');
    } else if (view === 'works') {
      setCurrentView('works');
    } else if (view === 'about') {
      setCurrentView('about');
    } else if (view === 'contact') {
      setCurrentView('contact');
    } else {
      setCurrentView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentView('category');
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
