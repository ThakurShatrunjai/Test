import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          
          {/* Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <img
                src={`${base}assets/about-us.jpg`}
                alt="About DP Globals"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Decorative overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                About Us
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Navigating Global Logistics with Precision
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                DP Globals is a trusted logistics partner delivering reliable,
                efficient, and innovative supply chain solutions across the globe.
                Our expertise spans sea freight, air freight, customs clearance,
                and door-to-door delivery.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong global network and a customer-first approach, we
                ensure seamless movement of goods while maintaining the highest
                standards of safety, transparency, and efficiency.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
