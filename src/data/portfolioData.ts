import { ArtistProfile, WorkCategory } from '../types/portfolio';

export const ARTIST_PROFILE: ArtistProfile = {
  name: "Anvi Stevens",
  location: "Wakefield, Massachusetts",
  email: "anvishahlines@gmail.com",
  instagramUrl: "https://www.instagram.com/aunvi20/",
  instagramHandle: "aunvi20",
  profileImage: "/images/profile_pic.jpg",
  bioParagraph:
    "Anvi Stevens is a visual artist whose works range from small handheld to large scale painting, drawing, sculptural and textile works. She grew up in Gujarat, India, and currently lives and works in Wakefield, Massachusetts. She received a Bachelor of Visual Arts from Maharaja Sayajirao University of Vadodara, India and a Master of Fine Arts from Boston University. Fabric, often acquired from her mother’s collection, serve as surfaces to dye and paint on. Through hand and machine stitching, and mark making techniques, Anvi uses abstraction to navigate the awkward, complex, and humorous experiences in a social setting that lead to growth and transformation. Anvi’s current body of work depicts chairs as vessels of personification, within imagined, represented, and/or constructed interior spaces. Inspired by the symbolic character of various natural and decorative objects from her mental, photographed, or physical collection she explores the historical and psychological weight carried by individuals in social situations.",
  statementParagraphs: [
    "My current body of work ponders on the unseen psychological weight people may carry. In a group setting, the body conforms to a bifurcating frame of mind — innate and presented. My work explores the tension between the two phases of self and the overlap of shared experiences. I use chairs to ground the 'nature of being' to physical existence.",
    "The abstract and fragmented memories of rituals performed, either once or as a tradition, are vesseled within the movements around the space and the involved furnishings. Sometimes it emerges as residual arrangement of furniture after a social gathering, proximity of a relationship in retrospective contemplation, or humorous representation of psychological projection. Through arrangement and assemblage, I materialize belonging and inclusion in social nuances, transparent or layered.",
    "The edges of the fabric come together like a slight brush of skin, generating an unexpected sense of tactility between materials, patterns, and marks. A scene is staged as it draws in a gaze. Movement is perceived.",
    "The fictional history depicted in the spaces I construct, retain the 'real' history possessed by various textiles incorporated from my mother’s collection, acquisitions from antique stores, as well as used clothing. They undergo processes of dyeing, eco printing, stitching, applique, painting, mark making, drawing, and embroidery creating an illusory dreamscape, recalled privately.",
    "‘Nature of being’ is observed in the symbolic ‘nature of things’ carried by the chairs. The subject of my paintings, the chairs, are vessels of personification while providing the comfort and familiarity a place of rest evokes."
  ],
  cvSections: [
    {
      title: "Education",
      items: [
        {
          year: "2021",
          primary: "Master of Fine Arts in Painting",
          secondary: "College of Fine Arts, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2017",
          primary: "Bachelor of Visual Arts in Painting",
          secondary: "Faculty of Fine Arts, Maharaja Sayajirao University of Baroda",
          details: "Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Two-Person Exhibitions",
      items: [
        {
          year: "2021",
          primary: "re·trace",
          secondary: "Two-person exhibition with Aisling Wilson, Commonwealth Gallery, Boston University",
          details: "Boston, MA"
        }
      ]
    },
    {
      title: "Group Exhibitions",
      items: [
        {
          year: "2023",
          primary: "New Language: Contemporary Abstraction",
          secondary: "Gallery 263",
          details: "Cambridge, MA"
        },
        {
          year: "2021",
          primary: "Characters, All",
          secondary: "Tiger Strikes Asteroid",
          details: "Brooklyn, NY"
        },
        {
          year: "2021",
          primary: "Krik? Krak! (Creatives of Color Boston)",
          secondary: "Multicultural Arts Center",
          details: "Cambridge, MA"
        },
        {
          year: "2021",
          primary: "MFA Painting Thesis Exhibition",
          secondary: "Stone Gallery, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2020",
          primary: "MFA Painting and Sculpture",
          secondary: "Commonwealth Gallery, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2018",
          primary: "Face To Face 3",
          secondary: "L. & P. Hutheesing Visual Art Center",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2018",
          primary: "First Take",
          secondary: "Abir Foundation",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Interlude 1",
          secondary: "Knots Art Collective, Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Envisage",
          secondary: "Kanoria Gallery for Arts",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Zarra",
          secondary: "Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        },
        {
          year: "2016",
          primary: "Wat-R-color",
          secondary: "Hub Vadodara, Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Residencies",
      items: [
        {
          year: "2027",
          primary: "Elf School of the Arts",
          secondary: "Artist Residency",
          details: "Upcoming"
        }
      ]
    },
    {
      title: "Awards & Scholarships",
      items: [
        {
          year: "2021",
          primary: "Howard Gotlieb Writer Artist Book Project Award",
          secondary: "Boston University",
          details: "Boston, MA"
        },
        {
          year: "2019–2021",
          primary: "Constantin Alajalov Scholarship",
          secondary: "School of Visual Arts, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2017",
          primary: "99th Annual Art Exhibition Award",
          secondary: "The Art Society of India",
          details: "Mumbai, India"
        }
      ]
    },
    {
      title: "Print Media & Publications",
      items: [
        {
          year: "2023",
          primary: "Create! Magazine (Issue 41)",
          secondary: "Juried by Victoria Fry",
          details: "Print Feature",
          url: "https://www.createmagazine.co/artists/anvi-stevens"
        }
      ]
    }
  ]
};

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: "nature-of-things",
    title: "Nature of Things",
    subtitle: "Chairs as vessels of personification & constructed spaces",
    coverImage: "/images/nature-of-things/02_Pull the curtain.JPG",
    cropPosition: "object-center",
    statementSnippet:
      "‘Nature of being’ is observed in the symbolic ‘nature of things’ carried by the chairs. The subject of my paintings, the chairs, are vessels of personification while providing the comfort and familiarity a place of rest evokes.",
    works: [
      {
        id: "nature-modular",
        title: "Modular",
        medium: "yarn, acrylic paint, graphite, and eco printed fabric",
        dimensions: "30.5x38.5 inches",
        year: "2026",
        image: "/images/nature-of-things/01_Modular.JPG",
        alt: "Rectangular textile hanging with red-brown painted borders, divided into dyed tan, mottled gray, and yellow-green panels, with an irregular patch of green tufted yarn at the lower center, a purple mesh scrap on the left, curved charcoal lines, and a pale blue wireframe cube outline on the right.",
        poem: "We imagine a living room, as a living room should be.\nWith couches to sit on, comfortably.\nAnd enough space for a social gathering."
      },
      {
        id: "nature-pull-the-curtain",
        title: "Pull the curtain",
        medium: "gold leaf, thread, water color, and various collected and eco printed fabric",
        dimensions: "29.5x21.5 inches",
        year: "2026",
        image: "/images/nature-of-things/02_Pull the curtain.JPG",
        alt: "Vertical textile hanging on a wooden dowel with tea-stained ground: red vine scrollwork and running stitches on a peach wash at upper left, a chartreuse strip with scalloped edge on the right, and a central chair silhouette with white stenciled backrest and dark navy seat bearing gold leaf flecks.",
        poem: "Peak in\nTo the hidden alcove\nSit down\nAnd gently approve."
      },
      {
        id: "nature-triggering-olfaction",
        title: "Triggering Olfaction",
        medium: "embroidery floss, acrylic paint, and various collected and eco printed fabric",
        dimensions: "25.5x22.5 inches",
        year: "2026",
        image: "/images/nature-of-things/03_Triggering Olfaction.JPG",
        alt: "Square textile hanging on a wooden dowel: gray central panel with a red embroidered outline of a wingback armchair, surrounded by painted white dashed clusters and yellow four-petaled flowers, bordered by a patchwork of paisley, blue cyanotype, and pink embroidered fabrics.",
        poem: "You smell like coriander, he said.\nYou smell like yourself, I said."
      },
      {
        id: "nature-rooted",
        title: "Rooted",
        medium: "twill tape, embroidery floss, eyelet, water color, color pencil, charcoal, dyed cotton and silk fabric on raw canvas",
        dimensions: "61x35 inches",
        year: "2026",
        image: "/images/nature-of-things/04_rooted.JPG",
        alt: "Tall vertical textile on raw canvas: chair frame outlined in black-and-white linear woodgrain hatching, backrest formed of green and sage fabric strips with stitched leaf-shaped cord loops and an orange stitched leaf, and lower fringe of vertical fabric ribbons in ochre, purple, blue, beige, and black with metal eyelets.",
        poem: "The vines are as much under the ground as they are above."
      },
      {
        id: "nature-adorned",
        title: "Adorned",
        medium: "Oil paint and color pencil on canvas and fabric",
        dimensions: "40x16 inches",
        year: "2026",
        image: "/images/nature-of-things/05_Adorned.JPG",
        alt: "Vertical painting on canvas divided into two sections: the lower half shows a mottled periwinkle blue wall with a white and gold axonometric line outline of a table; the upper half shows an olive green wall with an arched blue alcove containing wooden shelves displaying a green vase, coral specimen, dark teapot, and pottery vessels.",
        poem: "I prepared the table\nDecorated the shelves;\nI cooked the food\nArranged the flowers;\nRemind me again,\nWhat we talked about that day?"
      },
      {
        id: "nature-burden",
        title: "The Burden You Carry",
        medium: "eco-printed fabric, thread, charcoal and acrylic paint on linen towel",
        dimensions: "31.5\" x 16.5\"",
        year: "2026",
        image: "/images/nature-of-things/06_The Burden You Carry.JPG",
        alt: "Vertical coarse linen towel with blue and yellow edge stripes, featuring a black line drawing of a chair with a large circular white patch on the seat filled with yellow honeycomb patterns, and horizontal charcoal shading across the base.",
        poem: "The coral is pretty\nYet it hides in plain sight."
      },
      {
        id: "nature-ac",
        title: "Some blame the air conditioning",
        medium: "graphite, embroidery floss, acrylic paint and fabric",
        dimensions: "30x22 inches",
        year: "2026",
        image: "/images/nature-of-things/07_Some blame the air conditioning.JPG",
        alt: "Three-tier textile piece: black upper panel with gold manufacturer text and silver embroidered four-point star constellations, middle white painted horizontal band, and beige lower fabric with a blue chair outline over woven denim grid, white cross-stitches, an orange vase silhouette, and folded striped fabric.",
        poem: "I make the bed on the terrace,\nGet a pot of water from the kitchen. All this\nRunning up and down the stairs, briskly.\nI lay down to find Orion’s Belt\nAnd fall asleep\nThe bed is like the night -\nCool and crisp."
      }    ]
  },
  {
    id: "landscape",
    title: "Landscape",
    coverImage: "/images/landscape/01_adrift_2.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "A metaphor for walking through a vast space and becoming lost in the many details. The rhythm and flow serve as a visual navigation through the terrain.",
    works: [
      {
        id: "land-adrift-ii",
        title: "Adrift 2",
        medium: "Dyed fabric",
        dimensions: "47x22.5x10.5 inches",
        year: "2023",
        image: "/images/landscape/01_adrift_2.jpg",
        alt: "Dyed fabric lengths in peach, terracotta-orange, pale yellow, and beige with a small teal-blue rectangular fabric patch, suspended from the ceiling in undulating folds in front of a white staircase with wooden balusters.",
      },
      {
        id: "land-another-way",
        title: "Another Way of Response",
        medium: "Paint, Dye, Graphite, and Thread on Fabric",
        dimensions: "42x62 inches",
        year: "2023",
        image: "/images/landscape/02_another_way_of_response.jpg",
        alt: "Wide pieced textile pinned to a wall: botanical dye panel on the left, gray panel with white painted loop spirals, red-orange-yellow silk vertical stripe, large off-white center covered in dense small black pen arcs around a pink square with a neon peach cord loop outline, tie-dyed shirt fabric draped across the top, and green panel with cut holes on the right.",
      },
      {
        id: "land-adrift-i",
        title: "Adrift",
        medium: "Charcoal, Geru, Paint, and Gold Leaf on Fabric",
        dimensions: "41x68 inches",
        year: "2021",
        image: "/images/landscape/03_adrift_1.jpg",
        alt: "Vertical textile hanging on off-white linen with red running stitch along the top: large center field of dense horizontal charcoal marks with a gold leaf patch near the lower left, a solid reddish-brown painted band beneath, and a lower patchwork hem of dyed fabric strips in teal, gray, lavender, and green.",
      },
      {
        id: "land-between-spaces",
        title: "Between the Spaces – Through the Frame",
        medium: "Dye, Paint, and Gold Leaf on Fabric",
        dimensions: "66x54 inches",
        year: "2021",
        image: "/images/landscape/04_between_the_spaces_through_the_frame.jpg",
        alt: "Vertical textile hanging: upper section has an L-shaped black corner border, an embroidered blue yarn border line, and a wide band of purple starburst tie-dye over light brown wash; lower half has a dark green panel with an appliquéd yellow translucent polygon, gold leaf flecks, white painted twig lines, and a side panel with a terracotta rectangle.",
      },
      {
        id: "land-two-sides",
        title: "Two Sides of It",
        medium: "Paint, Paper, Sand, Gold Leaf, and Thread on Fabric",
        dimensions: "63x60 inches",
        year: "2021",
        image: "/images/landscape/05_two_sides_of_it.jpg",
        alt: "Multi-panel textile piece: left side has a black fabric panel with silver right-angle band and white stitches above gray linen and cream silk; right side has a large periwinkle-blue field with an orange-striped hatch rectangle, pencil loops, and gold leaf flecks, over cream paper with torn horizontal brown and black paper strips.",
      },
      {
        id: "land-outside-in",
        title: "Outside In",
        medium: "Charcoal, Dye, Paint, and Geru on Fabric",
        dimensions: "60x66 inches",
        year: "2021",
        image: "/images/landscape/06_outside_in.jpg",
        alt: "Pieced textile assemblage: black fabric on the left with pinstripes and four silver embroidered discs curling open; central white square with yellow pigment; right framed cream panel above a pink field and dark brown horizontal wash band with yellow ladder stripes; and a horizontal gray fabric strip along the bottom right.",
      },
      {
        id: "land-notes",
        title: "Notes",
        medium: "Thread, Watercolor and Cotton on Fabric",
        dimensions: "108x36 inches",
        year: "2019",
        image: "/images/landscape/07_notes.jpg",
        alt: "Long vertical off-white cotton scroll suspended from ceiling pipes, showing scattered pale amber and rust watercolor stains and multiple spaced horizontal lines of hand-embroidered black thread dashes and linear marks.",
      }
    ]
  },
  {
    id: "sculptures",
    title: "Sculptures",
    coverImage: "/images/sculptures/01_shelf_1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Wall-hanging fabric pieces and sculptural works that personify materials and lived memories.",
    works: [
      {
        id: "sculpt-shelf-1",
        title: "Shelf 1",
        medium: "Acrylic paint, Air drying clay, Graphite, Found Objects, and Thread on Wood",
        dimensions: "11.5x13x1.5 inches",
        year: "2022",
        image: "/images/sculptures/01_shelf_1.jpg",
        alt: "Rectangular pine wood board with a left ruler edge: attached to the surface are a circular clump of frayed pink and red embroidery thread, a rounded white clay slab, an angled dark green paper scrap, a purple paper rectangle, six horizontal blue painted wavy stripes, pencil lines, and a small metal watch link.",
        poem: "The carpet in my house is pink;\nAnd the rock in my yard is white.\nBut what are these marks on the windows?\nIt’s the cats’ nose."
      },
      {
        id: "sculpt-shelf-2",
        title: "Shelf 2",
        medium: "Paint, Graphite, Found Objects, and Lace on Wood",
        dimensions: "11.5x12.5x8.5 inches",
        year: "2022",
        image: "/images/sculptures/02_shelf_2.jpg",
        alt: "Rectangular pine wood board: upper left has a galvanized metal bucket over a black painted circle; below is a small clear plastic bag containing a looped black rubber band taped with white paper; right side features arranged vertical wooden shims painted with white stripes, a green painted grass cluster, and a horizontal pink twill ribbon.",
        poem: "I am wrapping curtains like I wrap gifts;\nAdding colors and hanging plants.\nWhile we balance the vines fill the gap."
      },
      {
        id: "sculpt-shelf-3",
        title: "Shelf 3",
        medium: "Acrylic Paint, Wood Stain, and Found Objects on Wood",
        dimensions: "15.5x10x1 inches",
        year: "2022",
        image: "/images/sculptures/03_shelf_3.jpg",
        alt: "White painted wood panel with swirling golden-brown wood stain along the left side: top edge holds arranged found fragments of ceramic, chalk, and glass shards; two brass hanging brackets are attached on the right; center features arched black ink lines over a painted sky-blue pool with a cluster of pink and beige thread stitches.",
      },
      {
        id: "sculpt-calendar-detail",
        title: "Calendar (detail)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "3x1.5 inches",
        year: "2019",
        image: "/images/sculptures/calendar_detail.jpg",
        alt: "Two vertical white cards mounted on a wall: left card holds a tapered reddish-brown mulch wood chunk wrapped with white string over black ink dotted loops and splatters; right card holds a horizontal cylinder of reddish wood bound with white string and two black thread bands.",
      },
      {
        id: "sculpt-calendar-retrace-1",
        title: "Calendar (installation view of re:trace)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_1.jpg",
        alt: "Tall vertical column of small white paper cards pinned one above another on a white gallery wall, each bearing a string-wrapped mulch wood fragment with ink markings, leading down to a light wood wall shelf holding seven silver pebble-shaped metallic bells.",
      },
      {
        id: "sculpt-calendar-retrace-2",
        title: "Calendar (installation view of re:trace - detail 1)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_2.jpg",
        alt: "Vertical sequence of eight stacked cream cards pinned to a white gallery wall, each featuring a wrapped reddish mulch wood segment bound with black or white thread and accompanied by dashed ink loops and dotted marks.",
      },
      {
        id: "sculpt-calendar-retrace-3",
        title: "Calendar (installation view of re:trace - detail 2)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_3_detail.jpg",
        alt: "Close-up of four stacked vertical white cards on a wall above a wooden shelf: the center card has an oval reddish mulch wood chunk bound with white thread over black ink dotted loops and splatters, with a torn paper strip and stitch lines on the card below.",
      }
    ]
  },
  {
    id: "installation",
    title: "Installation",
    coverImage: "/images/installation/Collaboration with Aisling Wilson 1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Site-specific spatial interventions with suspended textiles, constructed frame planes, and light-and-shadow environments.",
    works: [
      {
        id: "inst-collab-1",
        title: "Collaboration with Aisling Wilson 1",
        image: "/images/installation/Collaboration with Aisling Wilson 1.jpg",
        alt: "Gallery wall installation: approximately 60–70 irregular white plaster or paper fragments of varying sizes pinned in a scattered constellation pattern across a large warm gray painted rectangular field on a white gallery wall, with soft spotlight illuminating the arrangement and casting gentle shadows behind each piece."
      },
      {
        id: "inst-collab-2",
        title: "Collaboration with Aisling Wilson 2",
        image: "/images/installation/Collaboration with Aisling Wilson 2.jpg",
        alt: "Gallery wall installation: two white semicircular arch-shaped shelves mounted on a white wall, each rimmed with small dark brown stones and topped with a row of gray oval fingerprint-like painted marks forming the arch shape. At far left a short horizontal red painted stroke; at far right a vertical teal and mustard-yellow painted strip with a fine thread dangling from it."
      },
      {
        id: "inst-collab-3",
        title: "Collaboration with Aisling Wilson 3",
        image: "/images/installation/Collaboration with Aisling Wilson 3.jpg",
        alt: "Gallery view: large rectangular cream linen fabric panel hung on wall with a roughly rectangular stitched graphite outline; a large circular wreath made of dense dark brown pine cones and seed pods overlaps the fabric and extends off the right edge. Two wooden wall-mounted shelves at right hold small dark brown stones lined along their rims."
      },
      {
        id: "inst-collab-3-detail",
        title: "Collaboration with Aisling Wilson 3 (Detail)",
        image: "/images/installation/Collaboration with Aisling Wilson 3_detail.jpg",
        alt: "Close-up detail of a vertical linen panel hung by top corner pins with a peach fabric strip along the bottom and a graphite outline of a table. A large dark textured oval wreath overlaps the right side of the fabric, connected at top left by a green painted arc, with a small wooden shelf holding dark sculpted forms in the lower right."
      },
      {
        id: "inst-collab-4",
        title: "Collaboration with Aisling Wilson 4",
        image: "/images/installation/Collaboration with Aisling Wilson 4.jpg",
        alt: "Wide gallery installation view: left wall shows a large brown mixed-media panel with a river-like graphite path and rumpled teal fabric pooled below it. A horizontal row of six small mixed-media panels at mid-wall height spans the room. Center: a long vertical narrow textile strip hangs from ceiling beside a small red painted square. Far right: a dark curved branch-like wreath mounted high with fine thread lines descending. A large glowing white rock form rests on the floor."
      },
      {
        id: "inst-collab-5",
        title: "Collaboration with Aisling Wilson 5",
        image: "/images/installation/Collaboration with Aisling Wilson 5.jpg",
        alt: "Gallery wall installation: a horizontal light-wood shelf mounted low on a white wall holds ten silver acorn-shaped bells spaced along its top surface; on the right, a vertical column of small stacked white paper cards extends upward along the wall, each card holding a string-wrapped mulch wood fragment with ink markings."
      },
      {
        id: "inst-101a2298",
        image: "/images/installation/101A2298.JPG",
        alt: "Vertical interior wall corner: a knotted multi-strand thread assemblage hangs straight down vertically along the corner seam from top to bottom, pooling into a pile on a lower surface, with the edge of an unframed drawing on paper pinned to the wall on the right."
      },
      {
        id: "inst-101a2299",
        image: "/images/installation/101A2299.JPG",
        alt: "Gallery installation in a white room: two wall-mounted shelves hold a tangled multicolored textile bundle beside a graphite oval drawing on one, and a small white fabric bundle on the other, connected by a thin rope. Behind the second shelf, two red and pink painted circles are visible on the wall."
      },
      {
        id: "inst-1163",
        image: "/images/installation/IMG_1163-1.jpg",
        alt: "Low-angle gallery floor view: a low white wooden plinth on a gray concrete floor holds a tangled multicolored textile and thread bundle beside a shaded graphite oval; in the background, a white tied parcel bound with cord sits on the floor near a vertical wooden dowel."
      },
      {
        id: "inst-1165",
        image: "/images/installation/IMG_1165-1.jpg",
        alt: "Gallery wall and floor installation: a vertical green wash painted low on a white wall is overlaid with a green shredded-plastic fringed hanging, beside an upright curved strip of metal mesh on the floor with a straight line of sand trailing forward along the floor seam."
      },
      {
        id: "inst-1195",
        image: "/images/installation/IMG_1195-1.jpg",
        alt: "Wide corner gallery installation view: left wall has green shredded plastic fringe with floor mesh, an ochre paper polygon, a dark green stripe, and pencil marks; a taut diagonal cord connects from the left wall to a freestanding vertical dowel weighted by a tied white parcel; the floor has a white plinth with a thread bundle; back wall has a brown paper baseline strip; right wall features a painted black crescent arc and a mauve-to-tan fabric banner."
      },
      {
        id: "inst-shahanvi-05",
        image: "/images/installation/ShahAnvi_05.jpg",
        alt: "Front-facing gallery wall view: a painted black crescent arc on the left, a small brown paper square with white and blue markings, a vertical dip-dyed mauve-to-tan fabric banner, a large pinned cream fabric hanging with a dark rectangular outline and green arc mark, and a brown paper fragment at the bottom left."
      }    ]
  },
  {
    id: "drawings",
    title: "Drawings",
    coverImage: "/images/drawings/02_Nurture.JPG",
    cropPosition: "object-center",
    statementSnippet:
      "Works on paper examining personal memory, natural gestures, delicate hand-stitching, and organic linear contours.",
    works: [
      {
        id: "draw-nurture",
        title: "Nurture",
        medium: "watercolor, color pencil, oil pastel, graphite, thread, gesso, and gold leaf on cold pressed archival watercolor paper",
        dimensions: "5.5 x 8.5 inches",
        year: "2026",
        image: "/images/drawings/02_Nurture.JPG",
        alt: "Graphite outline drawing of a spindle-back wooden chair on white paper, standing on an oval rug rendered in turquoise and maroon pastel strokes, with a dark red painted flower on the seat, white gesso relief and stitched thread below, and a gold leaf patch at the lower right.",
        poem: "I put some rocks around the hibiscus plant\nto stop the weeds from growing. I painted a flower,\ntook one to temple, and added several to the house\nDecoration."
      },
      {
        id: "draw-by-yourself",
        title: "By yourself",
        medium: "graphite, oil pastels, and ink on paper",
        dimensions: "8.5x11 inches",
        year: "2025",
        image: "/images/drawings/01_by yourself.jpg",
        alt: "Drawing on white paper of a shaded graphite wingback armchair on a blue stippled rug shape with pink patches, under a rectangular yellow-orange oil pastel frame outline, with an olive-gold scribbled circle on the left and a potted plant in a bowl on the lower right.",
        poem: "I smile at the pictures they sent\nfrom the celebration from back home."
      },
      {
        id: "draw-retrace",
        title: "re:trace",
        image: "/images/drawings/03_retrace.JPG",
        alt: "Deckle-edged sheet of off-white handmade paper with a rectangular wax or oil wash in the center bordered by fine hand-drawn brown ink botanical or grass-like sprigs along its perimeter and vertical centerline."
      },
      {
        id: "draw-script",
        title: "Script",
        image: "/images/drawings/04_script.jpg",
        alt: "White paper featuring a centered square composed of horizontal black ink bands separated by thin white gaps, with a small yellow watercolor oval mark in the lower right corner."
      },
      {
        id: "draw-peak-trough",
        title: "Peak and Trough",
        image: "/images/drawings/05_peak and trough.jpg",
        alt: "White rectangular paper with layered embossed and incised horizontal relief curves forming undulating wave-like contours across the surface."
      },
      {
        id: "draw-occupied-navigated",
        title: "Occupied and Navigated",
        medium: "Khadiya powder, watercolor, cotton, and thread on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/drawings/06_Occupied and Navigated.JPEG",
        alt: "Deckle-edged tan handmade paper with a white cotton tuft atop an ochre watercolor shape and red band, a central pencil-drawn cube outline, curved dotted golden trails, a knot of white thread at the cube's upper edge, and white gesso and teal brushstrokes at the base."
      },
      {
        id: "draw-space-1",
        title: "Space 1",
        medium: "Khadiya powder, graphite, and watercolor on paper",
        dimensions: "9” × 12”",
        year: "2019",
        image: "/images/drawings/07_Space 1.JPEG",
        alt: "Deckle-edged cream paper with a torn fibrous gray paper scrap at upper left, a vertical row of brown marker strokes, a pale pink painted rectangle overlaid with a ring of yellow-ochre stippled dots, textured white powder at lower left, and a pencil border."
      },
      {
        id: "draw-lump-in-throat",
        title: "A Lump in the Throat",
        medium: "Ink, gouache, and thread on handmade paper",
        dimensions: "8” × 11”",
        year: "2019",
        image: "/images/drawings/08_a lump in the throat.jpg",
        alt: "Drawing on off-white paper with curved pencil contour lines around a large solid terracotta-pink kidney-shaped gouache form in the center, with handwritten pencil text 'A LUMP IN THE THROAT.' in the lower right."
      },
      {
        id: "draw-pink",
        title: "Pink",
        image: "/images/drawings/09_pink.jpg",
        alt: "Square white stretched canvas mounted on a wall, featuring a large thick circular pink impasto shape with cracked surface texture layered over a curved patch of gold paint at the left edge."
      },
      {
        id: "draw-10",
        image: "/images/drawings/10.jpg",
        alt: "Sheet of cream paper pinned to a wall with brown paper taped along the right edge: contains a dotted graphite oval labeled '(centered)', handwritten text 'Never tried to look beyond.', adhered mesh square, small wood and stone fragments, pink painted strip with looped thread, and collage scraps."
      },
      {
        id: "draw-narrative-1",
        title: "Narrative 1",
        image: "/images/drawings/10_Narrative1.jpg",
        alt: "Off-white paper with two raw white cotton tufts pinned in the upper left above dashed vertical pencil lines, a horizontal yellow collage scrap and red painted rectangle at the bottom, and a curved black painted arch on the right."
      },
      {
        id: "draw-narrative-2",
        title: "Narrative 2",
        image: "/images/drawings/10_Narrative2.jpg",
        alt: "Off-white paper featuring a thick curved black ink brushstroke arching over a horizontal terracotta wash, with a textured tan collage piece, a small gray graphite patch, and clustered pen marks in the lower right."
      },
      {
        id: "draw-narrative-3",
        title: "Narrative 3",
        image: "/images/drawings/10_Narrative3.jpg",
        alt: "Cream paper with a textured bright yellow-orange pastel band, a pale yellow wash circle above, a small magenta pen hatching mark, a looped blue yarn stitch anchored across a diagonal liquid stain, and a torn tan paper scrap over a pink square in the lower right."
      },
      {
        id: "draw-narrative-4",
        title: "Narrative 4",
        image: "/images/drawings/10_Narrative4.jpg",
        alt: "Off-white sheet with a vertical dashed pencil line on the left, an olive-green pencil oval, a white painted cloud-like patch beside a torn blue print scrap, a curved diagonal black pencil line, and a blue watercolor stroke along the bottom right."
      },
      {
        id: "draw-narrative-5",
        title: "Narrative 5",
        image: "/images/drawings/10_Narrative5.jpg",
        alt: "Off-white sheet with a horizontal gray pencil hatch band across the lower third, an angled brown paper scrap, a pale yellow wax spot, a small red v-shaped paint mark, and a thin diagonal pencil line extending to the right edge."
      },
      {
        id: "draw-overlap",
        title: "Overlap",
        image: "/images/drawings/11_overlap.jpg",
        alt: "Two stacked rectangular sheets: the top sheet shows torn pink, mauve, and black paper collage shapes encircled by a thin silver wire or drawn loop; the bottom sheet has a bright yellow field with layered cream and gray shapes and stitched thread contours."
      },
      {
        id: "draw-trying-to-draw-parallels",
        title: "Trying to Draw Parallels",
        medium: "Watercolors, ink, and cotton thread on handmade paper",
        dimensions: "8” × 10”",
        year: "2019",
        image: "/images/drawings/12_Trying to Draw Parallels.jpeg",
        alt: "Vertical red-orange painted stripe flanked by a dark blue band on the left and white paper on the right, overlaid with two joined irregular torn patches of thick cream papier-mâché relief and parallel strands of coarse white stitched string emerging horizontally."
      },
      {
        id: "draw-13",
        image: "/images/drawings/13.jpg",
        alt: "Vertical charcoal drawing on cream paper showing elongated undulating columnar forms with tonal shading and a solid black tapered leaf-like shape on the right."
      },
      {
        id: "draw-14",
        image: "/images/drawings/14.jpg",
        alt: "Textured paper filled with dense horizontal rows of small dashed pencil marks, bisected by a single yellow dashed horizontal line and a smooth curved die-cut slit."
      },
      {
        id: "draw-bumped-into",
        title: "Bumped Into",
        image: "/images/drawings/15_Bumped Into.jpeg",
        alt: "White paper with an adhered crumpled white paper disc overlapping a drawn asymmetrical oval outlined in parallel black and magenta dashed lines, with handwritten text 'Bumped into' in the lower left."
      },
      {
        id: "draw-16",
        image: "/images/drawings/16.jpg",
        alt: "Brown watercolor wash ground overlaid on the left with a translucent sheet featuring cut-out geometric cross motifs, a white painted L-shaped structural beam on the right, and coarse white scrim fabric adhered at the bottom."
      },
      {
        id: "draw-17",
        image: "/images/drawings/17.jpg",
        alt: "Two-panel composition on pink watercolor ground: the left side depicts a wooden high-backed bench with a floral tile inset over blue-gray brick floor; the right side depicts a geometric diamond-patterned screen above a matching brick floor."
      },
      {
        id: "draw-18",
        image: "/images/drawings/18.jpg",
        alt: "Warm terra cotta and ochre watercolor wash on deckle-edged paper, depicting a dark linear outline of a tall cabinet or shelves filled with jars, with white floral dot patterns clustered in the lower right and a red patterned fabric border along the top edge."
      }
    ]
  },
  {
    id: "book-art",
    title: "Book Art",
    coverImage: "/images/book-art/new-year-poem/New Year Poem.jpg",
    cropPosition: "object-center",
    hasSubProjects: true,
    statementSnippet:
      "Artist books, hand-bound volumes, and etching narratives exploring tactile prose and personal histories.",
    subProjects: [
      {
        id: "her-little-black-book",
        title: "Her Little Black Book",
        coverImage: "/images/book-art/her-little-black-book/cover.jpg",
        cropPosition: "object-center",
        description: "Hand-bound artist book created with reclaimed dark textiles, delicate embroidery floss, and handwritten prose.",
        works: [
          { id: "hlbb-cover", title: "cover", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Hand-held worn dark navy notebook with elastic strap; the cover has text 'my her little black book.' with 'my' struck through and 'her' written in yellow crayon above it." },
          { id: "hlbb-open", title: "open book view", image: "/images/book-art/her-little-black-book/open book view.jpg", alt: "The book fanned open showing kraft paper pages densely filled with ink drawings and handwriting; visible text includes 'ONLY TO', 'NEXT DAY', and 'trying to crawl...'." },
          { id: "hlbb-snap-1", title: "inside snapshot 1", image: "/images/book-art/her-little-black-book/inside snapshot 1.jpg", alt: "Open spread: left page has a window drawing with text 'THE CROWD LOOKED INVITING FROM HER WINDOW'; right page shows a black silhouette in a yellow oval with text 'AND SHE STARTED WALKING AGAIN'." },
          { id: "hlbb-snap-2", title: "inside snapshot 2", image: "/images/book-art/her-little-black-book/inside snapshot 2.jpg", alt: "Open notebook spread on kraft paper: left page features a bold black rounded-rectangle outline containing hand-drawn text 'SEMI-CIRCLED', diagonal radiating lines at upper right, and two intersecting pink dashed lines arching across the gutter onto the right page, which shows an irregular contoured field with a black beetle silhouette and text 'AND \'BUGGED\''." },
          { id: "hlbb-snap-3", title: "inside snapshot 3", image: "/images/book-art/her-little-black-book/inside snapshot 3.jpg", alt: "Open spread: left page has a pencil sketch of a perspective room or box; right page has an ochre wash with a curved arch shape and the text 'AN ATTEMPT MADE TO REDEFINE THE TERRITORY'." },
          { id: "hlbb-snap-4", title: "inside snapshot 4", image: "/images/book-art/her-little-black-book/inside snapshot 4.jpg", alt: "Open spread: left page has a gestural red rectangle and black contour lines; right page reads 'INDECISIVE.' with a black grid of vertical bars and an arc outline." },
          { id: "hlbb-snap-5", title: "inside snapshot 5", image: "/images/book-art/her-little-black-book/inside snapshot 5.jpg", alt: "Open notebook spread on kraft paper: a horizontal band of black ink squiggles, flecks, washes, and scribbled gestures spans across both pages in the upper half; handwritten text at the bottom reads 'ACCUMULATED AND SUSPENDED.'." },
          { id: "hlbb-snap-6", title: "inside snapshot 6", image: "/images/book-art/her-little-black-book/inside snapshot 6.jpg", alt: "Open notebook spread on kraft paper: left page features an angled pencil grid spanning toward the gutter; right page has a bold black painted shape with an angular head and a long sweeping horizontal tail across the lower page, and a small black angular loop motif in the upper-right corner." },
          { id: "hlbb-snap-7", title: "inside snapshot 7", image: "/images/book-art/her-little-black-book/inside snapshot 7.jpg", alt: "Open notebook spread on kraft paper: a dark painted circular shape spans across the center fold, with the right semicircular portion larger than the left and supported below by a drawn rectangular leg outline; a solid black stroke runs along the lower-left edge, and handwritten pink text in the lower right reads 'THE TABLE WAS BIGGER ON HER SIDE.'." }
        ]
      },
      {
        id: "new-year-poem",
        title: "New Year Poem",
        coverImage: "/images/book-art/new-year-poem/New Year Poem.jpg",
        cropPosition: "object-center",
        description: "Artist book featuring hand-stitched poetry, delicate watercolor washes, and layered fabric collages.",
        works: [
          { id: "nyp-poem", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "Large textile artwork hung flat on wall with white silk-like ground, eco-printed beige left panel, pink wash center, blue woodgrain-printed right panel with vertical handwritten poem text, dark navy moth motif stitched with antennae, and scattered oval cut-outs." },
          { id: "nyp-cover-insert-1", title: "cover with insert 1", image: "/images/book-art/new-year-poem/cover with insert 1.jpg", alt: "Folded textile piece laid flat atop the stitched white cover on beige carpet: the top fabric panel has a pale beige and dusty rose watercolor ground with a large stitched black running-stitch outline of a canning jar in the center, a horizontal magenta line crossing beneath it, and small circular cut holes in the lower right." },
          { id: "nyp-front-cover", title: "front cover", image: "/images/book-art/new-year-poem/front cover.jpg", alt: "Rectangular white textile laid flat on beige carpet, featuring eighteen parallel vertical strips of frayed off-white fabric stitched down with straight rows of black running stitches." },
          { id: "nyp-back-cover", title: "back cover", image: "/images/book-art/new-year-poem/back cover.jpg", alt: "Full poem text handwritten in pencil on white fabric and paper, opening with 'When no one is looking, the new year arrives like a black moth & settles on the windowsill...'." },
          { id: "nyp-cover-insert-2", title: "cover with insert 2", image: "/images/book-art/new-year-poem/cover with insert 2.jpg", alt: "Textile piece partially folded on beige carpet: the white stitched cover with stitched off-white fabric strips is gathered and draped on the right over the dusty rose dyed fabric panel showing the stitched jar outline and small cut holes on the left." },
          { id: "nyp-cover-insert-3", title: "cover with insert 3", image: "/images/book-art/new-year-poem/cover with insert 3.jpg", alt: "Textile piece partially folded on beige carpet: the white stitched cover with vertical frayed cloth strips is gathered at the top, revealing the underlying dyed fabric panel with a black running-stitch jar outline and folded lower corner." },
          { id: "nyp-detail-1", title: "detail 1", image: "/images/book-art/new-year-poem/detail 1.jpg", alt: "Close-up detail of a rust and mauve eco-printed fabric fragment appliquéd with black running stitch beside a white oval patch with mauve spots and trailing magenta thread." },
          { id: "nyp-detail-2", title: "detail 2", image: "/images/book-art/new-year-poem/detail 2.jpg", alt: "Close-up of blue woodgrain-print panel with handwritten poem text running diagonally, featuring a small mauve oval patch stitched with gold and khaki dashes on creased white silk." },
          { id: "nyp-detail-3", title: "detail 3", image: "/images/book-art/new-year-poem/detail 3.jpg", alt: "Detail of scattered oval cut-holes and appliquéd mauve scraps with orange and blue running stitch, anchored by a large rust-toned patchwork piece and bisecting magenta thread line." },
          { id: "nyp-detail-4", title: "detail 4", image: "/images/book-art/new-year-poem/detail 4.jpg", alt: "Close-up of multiple oval cut-holes and three mauve and pink appliquéd fabric shapes stitched with orange thread on pale pink ground with a magenta stitched border." },
          { id: "nyp-detail-5", title: "detail 5", image: "/images/book-art/new-year-poem/detail 5.jpg", alt: "Detail of large dark navy moth motif stitched from dyed fabric with black blanket-stitch edging and long yarn antennae on an eco-printed beige to white background." },
          { id: "nyp-detail-6", title: "detail 6", image: "/images/book-art/new-year-poem/detail 6.jpg", alt: "Wider detail view showing composition of stitched moth motif, mauve fabric patches, oval cut-holes, and the blue woodgrain panel with poem text." }
        ]
      },
      {
        id: "story-board",
        title: "Story Board",
        coverImage: "/images/book-art/story-board/IMG_4174.jpeg",
        cropPosition: "object-center",
        description: "Etching print series on handmade paper with pigments and thread.",
        works: [
          {
            id: "sb-4174",
            title: "Storyboard #1",
            medium: "Etching on handmade paper with pigments and thread",
            image: "/images/book-art/story-board/IMG_4174.jpeg",
            alt: "Etching print on cream paper showing a pale blue rectangular ground with a dense cloud of small blue ink flecks clustered on the right side, labeled '2/3 Etching Storyboard #1' in pencil."
          },
          {
            id: "sb-4176",
            title: "Storyboard #3",
            medium: "Etching on handmade paper with pigments and thread",
            image: "/images/book-art/story-board/IMG_4176.jpeg",
            alt: "Etching print on cream paper showing a pale blue rectangular ground with a small solid dark blue cluster on the left and a larger pink and gray cloud of dense ink stippling on the right, labeled '2/3 Etching Storyboard #3' in pencil."
          },
          {
            id: "sb-4177",
            title: "Storyboard #4",
            medium: "Etching on handmade paper with pigments and thread",
            image: "/images/book-art/story-board/IMG_4177.jpeg",
            alt: "Etching print on cream paper showing a dark blue cluster and a larger pink stippled cloud, encircled by intersecting continuous and dashed loop lines, labeled '2/3 Etching Storyboard #4' in pencil."
          },
          {
            id: "sb-4178",
            title: "Storyboard #5",
            medium: "Etching on handmade paper with pigments and thread",
            image: "/images/book-art/story-board/IMG_4178.jpeg",
            alt: "Etching print on cream paper with a woven textile texture pressed into the lower blue background, a dark blue cluster, a rose-pink stippled form, and intersecting dashed loops, labeled '2/3 Etching Storyboard #5' in pencil."
          }
        ]
      }
    ],
    works: [
      { id: "ba-hlbb", title: "Her Little Black Book", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Dark navy cloth notebook cover with elastic band, showing crossed-out handwritten title text." },
      { id: "ba-nyp", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "Large wall-hanging fabric artwork with stitched text, eco-dyed panels, and an appliquéd navy moth motif." },
      { id: "ba-sb", title: "Story Board", image: "/images/book-art/story-board/IMG_4174.jpeg", alt: "Printed etching plate on cream paper displaying a pale blue field and fine ink flecks, labeled Storyboard #1." }
    ]
  },
  {
    id: "remnants-of-the-everyday",
    title: "Remnants of the Everyday",
    coverImage: "/images/remnants-of-the-everyday/1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Studies and tactile assemblages documenting ephemeral fragments, salvaged fibers, and daily domestic rituals.",
    works: [
      {
        id: "rem-1",
        title: "Remnants of the Everyday 1",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/1.jpg",
        alt: "Grid of 6 small mixed-media assemblages on canvas on a linen wall: fabric swatches with orange yarn fringe, weathered wood bark with white thread loop, coiled dark hair ring on canvas, white garment in clear plastic bag, terracotta painted clay fragment, and bright orange felt triangle with 'ORANGE' text, with a red-net basket filled with dried seed pods below right."
      },
      {
        id: "rem-2",
        title: "Remnants of the Everyday 2",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/2.jpg",
        alt: "Grid of 7 small assemblages on white canvas and paper on linen: newspaper clippings, crumpled cellophane wrapper, torn white paper envelope with blue star stamp, stenciled text 'M47F86 / you have requested a special service.', painted gradient canvas with circular element, plain white square canvas, and yellow sticky note numbered '381' with a dried leaf."
      },
      {
        id: "rem-3",
        title: "Remnants of the Everyday 3",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/3.jpg",
        alt: "Grid of 7 small assemblages on linen: rusted paper clips on canvas, knot of multicolored threads, dark seaweed or bark with a 'YAMAMOTO YAMA' tea label, bent wire with birch bark piece labeled 'Rule Book', white gesso relief with looping cord and small shells, smooth green rounded lens or glass, and a tangled ball of dark charcoal-gray thread."
      },
      {
        id: "rem-4",
        title: "Remnants of the Everyday 4",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/4.jpg",
        alt: "Grid of 7 small assemblages on linen: pink canvas with orange cellophane wrapper, densely stitched neon-orange embroidery thread forming an open oval ring, painted green hexagonal pattern, dried open seed pod on canvas, overlapping fabric discs with a pink bead, ink contour drawing of an upturned face, and foil blister pack containing one amber gel capsule."
      },
      {
        id: "rem-5",
        title: "Remnants of the Everyday 5",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/5.jpg",
        alt: "Grid of 7 small assemblages on linen: empty foil pill blisters on yellow canvas behind a patterned cardboard sleeve, fibrous handmade paper with string loop, yellow ticket reading 'ARE YOU LUCKY? HOLD THIS COUPON No 22865', white canvas with twine handle and metal peephole lens stamped with date code, lime-green stippled circular print, and two rows of pistachio shell halves on white canvas."
      },
      {
        id: "rem-6",
        title: "Remnants of the Everyday 6",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/6.jpg",
        alt: "Grid of 7 small assemblages on linen: dried magenta flowers on canvas, painted characters '21H' in green, sage, and pink, mauve watercolor wash labeled 'SPILL', hollowed dried citrus peel showing segmented interior, cotton cloth scrap with burned holes and scorched edges, earth powder with a vertical silver metallic strip, and graphite rubbings on paper labeled '2ND ATTEMP.'."
      },
      {
        id: "rem-7",
        title: "Remnants of the Everyday 7",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/7.jpg",
        alt: "Grid of 7 small assemblages on linen: white plaster form labeled 'decay on #19', yellow lined note reading 'Make cookies / Make cookies (but nicely)' under a striped roof shape, color photograph of four people in costume masks, clear zip pouch with potting soil and succulent leaves, miniature white plastic clothing hanger on canvas, magazine cutouts of colorful round chocolate gems labeled 'te gems', and gold discs with yellow fabric rosettes."
      },
      {
        id: "rem-8",
        title: "Remnants of the Everyday 8",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/8.jpg",
        alt: "Grid of 7 small assemblages on linen: illustrated instructions booklet in a pocket, ribbed red knit swatch with button, ink line drawing of a slice of bread in a zip-top plastic bag, dense pencil scribbles on canvas, Christmas card reading 'HAPPY HOLIDAYS' in gold glitter with cursive inscription 'Anvi Love from...', festive burst made of shredded colorful paper, and four pieces of dry rotini spiral pasta on canvas."
      },
      {
        id: "rem-9",
        title: "Remnants of the Everyday 9",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/9.jpg",
        alt: "Grid of 7 small assemblages on linen: teal button labeled 'PORTABELLA', joker playing card with burned left edge, colored pencil shavings with pastel marks, blue printed circle grid with taped address label, white canvas wrapped with tied white cloth ribbon, coiled twisted twine labeled 'Abstract design in Fur', and small glazed ceramic trumpet shape with red seed beads."
      },
      {
        id: "rem-10",
        title: "Remnants of the Everyday 10",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/10.jpg",
        alt: "Grid of 7 small assemblages on linen: black plastic strap buckle on canvas, crinkled gold foil with wrapped triangular chocolate, white card labeled 'MONKEY' with a fish hook illustration on black tape, drawn orange sunglasses with mounted black eyeglass frame, arranged colorful patterned shoelace strips, seven purple cabochon droplets on white canvas, and tied red twill ribbon bow."
      },
      {
        id: "rem-11",
        title: "Remnants of the Everyday 11",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/11.jpg",
        alt: "Grid of 28 small mixed-media assemblages arranged in 4 rows of 7 columns on linen: includes a printed toiletry list, paper bowl with wooden spoon, Sheth Opticals eyeglass cloth, contour line drawing of legs, mitten labeled 'STEALER', painted fish on yellow, embroidered mirrored textile, dried marigold flowers, lightbulb, and red envelope labeled 'Trent and family'."
      },
      {
        id: "rem-12",
        title: "Remnants of the Everyday 12",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/12.jpg",
        alt: "Grid of 28 small mixed-media assemblages arranged in 4 rows of 7 columns on linen: includes block-printed fabric swatches, small terracotta pot with white crystalline mass, cowrie shell, ink line drawing of an elephant, denim teardrop, stick figure made of toothpicks, cotton tassels on blue, sugar sachet, row of matchsticks, sequins spelling '100', and Indian postal card."
      },
      {
        id: "rem-13",
        title: "Remnants of the Everyday 13",
        medium: "Mixed-media assemblage on linen and canvas",
        image: "/images/remnants-of-the-everyday/13.jpg",
        alt: "Grid of 35 small mixed-media assemblages arranged in 5 rows of 7 columns on linen: includes green bouncy ball, washer labeled 'Refresher?', black leather glove spanning two rows, miniature toy car, spiral spring, thread heart bordered by numbers '100', orange tree labeled 'MAGIC POWERS', pink elastic labeled 'It broke', pig drawing labeled 'Introducing GORDO FULLER', and brass key."
      }
    ]
  }
];
