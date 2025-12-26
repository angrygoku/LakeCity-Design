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
              <span className="text-gradient">creative design</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Lakecity Designs is a design studio built on a simple belief: great design 
                builds trust, and trust builds business. We partner with clients 
                who value quality and understand that every visual touchpoint matters.
              </p>
              <p>
                Whether you're planning an intimate wedding, pitching to investors, 
                organizing a corporate event, or launching your online presence—we 
                bring the same level of dedication and creativity to every project.
              </p>
              <p>
                From business cards to full brand identities, from single invitations 
                to complete wedding suites, from landing pages to feature-rich websites—
                <strong className="text-foreground"> no project is too small, and no vision is too big.</strong>
              </p>
            </div>
          </div>

          {/* Right - Why Choose Us */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Client-Focused",
                description:
                  "Your vision drives everything we do. We listen, understand, and deliver designs that reflect your unique story.",
              },
              {
                number: "02",
                title: "Quality Obsessed",
                description:
                  "Every pixel, every fold, every detail matters. We don't cut corners—we craft experiences that impress.",
              },
              {
                number: "03",
                title: "Reliable & Professional",
                description:
                  "Clear communication, on-time delivery, and no surprises. We value your time and trust as much as you do.",
              },
              {
                number: "04",
                title: "End-to-End Service",
                description:
                  "From concept to final delivery, we handle it all. One partner for all your design needs, big or small.",
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
