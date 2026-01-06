const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Your trusted partner in{" "}
              <span className="text-gradient">web design</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Lakecity Design is a web design studio built on a simple belief: great websites 
                build trust, and trust builds business. We partner with clients 
                who value quality and understand that their online presence matters.
              </p>
              <p>
                Whether you're a startup looking for your first website, a growing business 
                needing an e-commerce store, or an established brand ready for a redesign—we 
                bring the same level of dedication and creativity to every project.
              </p>
              <p>
                From simple landing pages to complex web applications, from local businesses 
                to national brands—
                <strong className="text-foreground"> no project is too small, and no vision is too big.</strong>
              </p>
            </div>
          </div>

          {/* Right - Why Choose Us */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Conversion Focused",
                description:
                  "We don't just make pretty websites—we build sites that turn visitors into paying customers.",
              },
              {
                number: "02",
                title: "Mobile-First Design",
                description:
                  "Every site looks perfect on phones, tablets, and desktops. 70% of traffic is mobile—we design for that.",
              },
              {
                number: "03",
                title: "Lightning Fast",
                description:
                  "Speed matters for SEO and conversions. Our sites load in under 3 seconds, every time.",
              },
              {
                number: "04",
                title: "Ongoing Support",
                description:
                  "We don't disappear after launch. Get reliable support and updates whenever you need them.",
              },
            ].map((value) => (
              <div
                key={value.number}
                className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-display font-bold text-muted/50 group-hover:text-primary/30 transition-colors">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
