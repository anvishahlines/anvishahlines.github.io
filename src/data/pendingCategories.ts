import { WorkCategory } from '../types/portfolio';

// Stashed pending categories to be populated and restored when updating from the shared drive:
export const PENDING_CATEGORIES: WorkCategory[] = [
  {
    id: "sculptures",
    title: "Sculptures",
    coverImage: "/images/stevensanvi01.jpg",
    cropPosition: "object-center",
    works: [
      {
        id: "sculpt-1",
        title: "Sculptural Painting I",
        medium: "Fabric, armature, thread, acrylic and oil pigments",
        dimensions: "24” × 26” × 6”",
        year: "2020",
        image: "/images/stevensanvi01.jpg",
      },
      {
        id: "sculpt-2",
        title: "Sculptural Painting II",
        medium: "Manipulated textiles, stitched stuffing, and mixed pigments",
        dimensions: "22” × 28” × 5”",
        year: "2020",
        image: "/images/stevensanvi02.jpg",
      },
      {
        id: "sculpt-3",
        title: "Sculptural Painting III",
        medium: "Antique fabric fragments, wire structure, thread, and gouache",
        dimensions: "26” × 30” × 7”",
        year: "2020",
        image: "/images/stevensanvi03.jpg",
      },
      {
        id: "sculpt-4",
        title: "Sculptural Painting IV",
        medium: "Dyed textiles, folded canvas, and hand-embroidered surface",
        dimensions: "20” × 24” × 4”",
        year: "2020",
        image: "/images/stevensanvi04.jpg",
      },
      {
        id: "sculpt-5",
        title: "Sculptural Form (Studio Study)",
        medium: "Stitched relief with collected materials",
        dimensions: "18” × 20” × 5”",
        year: "2019",
        image: "/images/20191105-114908.jpg",
      },
      {
        id: "sculpt-6",
        title: "Sculptural Paintings Installation",
        medium: "Ensemble of three-dimensional textile works",
        dimensions: "Variable room dimensions",
        year: "2019–2020",
        image: "/images/sculpture_paintings.jpg",
      }
    ]
  },
  {
    id: "installation",
    title: "Installation",
    coverImage: "/images/101a2334.jpg",
    cropPosition: "object-center",
    works: [
      {
        id: "inst-1",
        title: "Spatial Collaboration I",
        medium: "Collaboration with Aisling Wilson: Suspended dyed fabrics, structural cables, and ambient shadows",
        dimensions: "Site-specific installation",
        year: "2021",
        image: "/images/101a2334.jpg",
      },
      {
        id: "inst-2",
        title: "Spatial Collaboration (Detail)",
        medium: "Collaboration with Aisling Wilson: Dyed textile intersections and tension lines",
        dimensions: "Detail shot",
        year: "2021",
        image: "/images/101a2339.jpg",
      },
      {
        id: "inst-3",
        title: "Intervention in Space I",
        medium: "Suspended dyed textiles and constructed room framing",
        dimensions: "Gallery room scale",
        year: "2021",
        image: "/images/101a2485.jpg",
      },
      {
        id: "inst-4",
        title: "Intervention in Space II",
        medium: "Architectural textile suspension with vertical line elements",
        dimensions: "Gallery room scale",
        year: "2021",
        image: "/images/101a2488.jpg",
      }
    ]
  },
  {
    id: "drawings",
    title: "Drawings",
    coverImage: "/images/occupied-and-navigated.jpeg",
    cropPosition: "object-center",
    works: [
      {
        id: "draw-1",
        title: "Occupied and Navigated",
        medium: "Khadiya powder, watercolor, cotton, and thread on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/occupied-and-navigated.jpeg",
      },
      {
        id: "draw-2",
        title: "Trying to Draw Parallels",
        medium: "Watercolors, ink, and cotton thread on handmade paper",
        dimensions: "8” × 10”",
        year: "2019",
        image: "/images/trying-to-draw-parallels.jpeg",
      },
      {
        id: "draw-3",
        title: "Space 1",
        medium: "Khadiya powder, graphite, and watercolor on paper",
        dimensions: "9” × 12”",
        year: "2019",
        image: "/images/space-1.jpeg",
      },
      {
        id: "draw-4",
        title: "A Lump in the Throat",
        medium: "Ink, gouache, and thread on handmade paper",
        dimensions: "8” × 11”",
        year: "2019",
        image: "/images/a-lump-in-the-throat-copy.jpg",
      },
      {
        id: "draw-5",
        title: "Paper Study 12",
        medium: "Mixed media, pigments, and stitching on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-12.jpg",
      },
      {
        id: "draw-6",
        title: "Paper Study 11",
        medium: "Khadiya powder and fine thread",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-11.jpg",
      },
      {
        id: "draw-7",
        title: "Paper Study 05",
        medium: "Ink and thread on handmade sheet",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-05.jpg",
      },
      {
        id: "draw-8",
        title: "Drawings Series Overview",
        medium: "Khadiya powder, watercolor, cotton and thread",
        dimensions: "Folio collection",
        year: "2019–2020",
        image: "/images/drawings.jpg",
      }
    ]
  },
  {
    id: "book-art",
    title: "Book Art",
    coverImage: "/images/new-year-poem.jpg",
    cropPosition: "object-center",
    hasSubProjects: true,
    subProjects: [
      {
        id: "her-little-black-book",
        title: "Her Little Black Book",
        coverImage: "/images/img-5621.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "hlbb-1",
            title: "Her Little Black Book (Cover & Binding)",
            medium: "Hand-bound book with reclaimed dark textiles, cotton thread, and ink",
            dimensions: "6” × 8” × 1.5” (closed)",
            year: "2020",
            image: "/images/img-5621.jpg",
          },
          {
            id: "hlbb-2",
            title: "Her Little Black Book (Interior Leaves)",
            medium: "Stitched swatches, embroidery, and handwritten prose",
            dimensions: "6” × 8” (each leaf)",
            year: "2020",
            image: "/images/notes.jpg",
          },
          {
            id: "hlbb-3",
            title: "Her Little Black Book (Detail Spread)",
            medium: "Layered fabric applique, thread, and dyed cotton",
            dimensions: "12” × 8” (open)",
            year: "2020",
            image: "/images/02-another-way-of-response.jpg",
          }
        ]
      },
      {
        id: "story-board",
        title: "Story Board",
        coverImage: "/images/anvishah-narrative4.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "sb-1",
            title: "Story Board (Sequence I & II)",
            medium: "Accordion fold on handmade paper, Khadiya powder, thread, and pigment",
            dimensions: "8” × 36” (extended)",
            year: "2021",
            image: "/images/anvishah-narrative4.jpg",
          },
          {
            id: "sb-2",
            title: "Story Board (Detail — The Gathering)",
            medium: "Stitched panels with watercolor and collage elements",
            dimensions: "8” × 12”",
            year: "2021",
            image: "/images/trying-to-draw-parallels.jpeg",
          },
          {
            id: "sb-3",
            title: "Story Board (Thresholds)",
            medium: "Dyed cotton strips and ink marks on paper",
            dimensions: "8” × 12”",
            year: "2021",
            image: "/images/space-1.jpeg",
          }
        ]
      },
      {
        id: "new-york-poem",
        title: "New York Poem",
        coverImage: "/images/new-year-poem.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "nyp-1",
            title: "New York Poem (Full Spread)",
            medium: "Dyed fabric, hand-stitched poetry, applique, and watercolor on canvas",
            dimensions: "24” × 32”",
            year: "2022",
            image: "/images/new-year-poem.jpg",
          },
          {
            id: "nyp-2",
            title: "New York Poem (Stanza Detail)",
            medium: "Fine embroidery and raw fabric edges",
            dimensions: "Detail view",
            year: "2022",
            image: "/images/between-the-spaces-through-the-frame.jpg",
          }
        ]
      }
    ],
    works: [
      {
        id: "ba-overview-1",
        title: "New York Poem",
        medium: "Dyed fabric, hand-stitched poetry, applique, and watercolor on canvas",
        dimensions: "24” × 32”",
        year: "2022",
        image: "/images/new-year-poem.jpg",
      },
      {
        id: "ba-overview-2",
        title: "Her Little Black Book",
        medium: "Hand-bound artist book with dark textiles and stitching",
        dimensions: "6” × 8”",
        year: "2020",
        image: "/images/img-5621.jpg",
      },
      {
        id: "ba-overview-3",
        title: "Story Board Sequence",
        medium: "Accordion fold on handmade paper with thread",
        dimensions: "8” × 36”",
        year: "2021",
        image: "/images/anvishah-narrative4.jpg",
      }
    ]
  }
];
