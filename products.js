let products = [
    { image: "https://atharv1507.github.io/BankimWeb/photos/ring.jpeg", category: "ring", name: "The Reflection", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/ring2.jpeg", category: "ring", name: "Boho Classic", price: 4500 },

    { image: "https://atharv1507.github.io/BankimWeb/photos/boho.jpeg", category: "boho", name: "Boho Elegance", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/boho2.jpeg", category: "boho", name: "Boho Charm", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/boho3.jpeg", category: "boho", name: "Boho Serenity", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/boho4.jpeg", category: "boho", name: "Boho Dream", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/boho5.jpeg", category: "boho", name: "Boho Spirit", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/kids.jpeg", category: "boho", name: "Boho Kids", price: 5500 },
    
    
    { image: "https://atharv1507.github.io/BankimWeb/photos/EVILEYE1.jpeg", category: "evileye", name: "The protector", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/EVILEYE2.jpeg", category: "evileye", name: "The guardian", price: 4500 },
    
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion2.jpeg", category: "modern-fusion", name: "Fusion Flow", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion3.jpeg", category: "modern-fusion", name: "Fusion Balance", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion4.jpeg", category: "modern-fusion", name: "Fusion Pulse", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion5.jpeg", category: "modern-fusion", name: "Fusion Harmony", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion6.jpeg", category: "modern-fusion", name: "Fusion Rhythm", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion7.jpeg", category: "modern-fusion", name: "Fusion Vibe", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion8.jpeg", category: "modern-fusion", name: "Fusion Spark", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion9.jpeg", category: "modern-fusion", name: "Fusion Edge", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion10.jpeg", category: "modern-fusion", name: "Fusion Vision", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion11.jpeg", category: "modern-fusion", name: "Fusion Motion", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion12.jpeg", category: "modern-fusion", name: "Fusion Echo", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion13.jpeg", category: "modern-fusion", name: "Fusion Nova", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion14.jpeg", category: "modern-fusion", name: "Modern Breeze", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion15.jpeg", category: "modern-fusion", name: "Modern Essence", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion16.jpeg", category: "modern-fusion", name: "Modern Spirit", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion17.jpeg", category: "modern-fusion", name: "Modern Aura", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion18.jpeg", category: "modern-fusion", name: "Modern Glow", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion19.jpeg", category: "modern-fusion", name: "Modern Shine", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/modern-fusion20.jpeg", category: "modern-fusion", name: "Modern Radiance", price: 5500 },
  
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai.jpeg", category: "pichwai", name: "Pichwai Heritage", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai2.jpeg", category: "pichwai", name: "Pichwai Splendor", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai3.jpeg", category: "pichwai", name: "Pichwai Grace", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai4.jpeg", category: "pichwai", name: "Pichwai Lotus", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai5.jpeg", category: "pichwai", name: "Pichwai Blossom", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai6.jpeg", category: "pichwai", name: "Pichwai Divine", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/pichwai7.jpeg", category: "pichwai", name: "Pichwai Classic", price: 5000 },
  
    { image: "https://atharv1507.github.io/BankimWeb/photos/sakhi2.jpeg", category: "sakhi", name: "Sakhi Reflection", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/sakhi3.jpeg", category: "sakhi", name: "Sakhi Blossom", price: 4500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/sakhi4.jpeg", category: "sakhi", name: "Sakhi Harmony", price: 5000 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/sakhi.jpeg", category: "sakhi", name: "Sakhi Radiance", price: 5500 },
    { image: "https://atharv1507.github.io/BankimWeb/photos/sakhi5.jpeg", category: "sakhi", name: "Sakhi Grace", price: 5500 }
  ];
  