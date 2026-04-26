import heroImg from "@/assets/levante-mug.png";
import drinksImg from "@/assets/drinks-table.png";
import matchaImg from "@/assets/matcha-real.png";
import muffinImg from "@/assets/muffin.png";
import interiorImg from "@/assets/levante-interior.png";
import icedMatchaImg from "@/assets/iced-matcha.png";
import spirulinaImg from "@/assets/spirulina-matcha.png";
import { Star, MapPin, Phone, Clock, Globe, Coffee, Leaf, Heart, ChevronRight, Quote, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { reviews } from "@/data/reviews";
import {
  drinkSizes,
  hotIcedDrinks,
  singleSizeDrinks,
  extras,
  syrups,
  bakery,
  specialtySizes,
  specialtyPrices,
  specialties,
} from "@/data/menu";


const tags = ["matcha 51", "welcoming atmosphere 55", "banana pudding matcha 22", "mango matcha 4", "dark chocolate", "Italian soda", "owner is amazing", "free rings"];

const ReviewCard = ({ r }: { r: typeof reviews[number] }) => (
  <Card className="p-6 bg-card border-border shadow-soft flex flex-col animate-fade-up">
    <Quote className="h-6 w-6 text-accent/40 mb-3" />
    <div className="flex gap-0.5 text-gold mb-3">
      {[...Array(r.rating)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
    </div>
    <p className="text-foreground/90 leading-relaxed text-[15px] flex-1">"{r.text}"</p>
    <div className="mt-5 pt-5 border-t border-border">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full gradient-warm text-primary-foreground flex items-center justify-center font-display font-semibold shrink-0">
          {r.name[0]}
        </div>
        <div className="flex-1">
          <div className="font-medium text-sm">{r.name}</div>
          <div className="text-xs text-muted-foreground">{r.meta} · {r.when}</div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-secondary/60 p-3 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Owner replied:</span> {r.response}
      </div>
    </div>
  </Card>
);

const PAGE_SIZE = 9;
const ReviewsList = () => {
  const [visible, setVisible] = useState(6);
  const shown = reviews.slice(0, visible);
  const remaining = reviews.length - visible;
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((r, i) => <ReviewCard key={i} r={r} />)}
      </div>
      <div className="text-center mt-12 flex flex-wrap gap-3 justify-center items-center">
        {remaining > 0 ? (
          <Button
            size="lg"
            onClick={() => setVisible(v => Math.min(v + PAGE_SIZE, reviews.length))}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View more reviews ({remaining} left)
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          visible > 6 && (
            <Button
              size="lg"
              variant="outline"
              onClick={() => setVisible(6)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Collapse reviews
            </Button>
          )
        )}
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <a href="https://www.google.com/search?q=Levante+Coffee+Chandler+reviews" target="_blank" rel="noreferrer">See on Google</a>
        </Button>
        <p className="w-full text-xs text-muted-foreground mt-2">Showing {shown.length} of {reviews.length} reviews</p>
      </div>
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <Coffee className="h-5 w-5 text-accent" />
            Levante <span className="text-accent">Coffee</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#visit" className="hover:text-accent transition-colors">Visit</a>
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://levantecoffee.com" target="_blank" rel="noreferrer">Order Online</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img src={heroImg} alt="Espresso pouring at Levante Coffee" width={1600} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container pb-20 pt-32 text-primary-foreground">
          <Badge className="bg-accent/95 hover:bg-accent text-accent-foreground border-0 mb-6 animate-fade-up">
            <Star className="h-3 w-3 mr-1 fill-current" /> 4.9 · 219 Google Reviews
          </Badge>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] text-balance max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Slow coffee.<br />
            <em className="text-gold font-medium">Warm</em> welcome.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A neighborhood café in Chandler, AZ pouring date-sweetened matcha, dark-chocolate mochas, and Italian sodas — served with the kind of hospitality people drive across town for.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-warm">
              <a href="#menu">Explore the Menu <ChevronRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-cream/50 text-cream hover:bg-cream/10 hover:text-cream">
              <a href="#visit">Visit Us</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/80 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Chandler, AZ</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Open daily · 8 AM – late</span>
            <span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-gold" /> Dine-in · Curbside · Delivery</span>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { v: "4.9", l: "Google Rating", sub: "219 reviews" },
            { v: "$1–10", l: "Per person", sub: "Approachable pricing" },
            { v: "100%", l: "Made with care", sub: "Every cup, every visit" },
            { v: "8 AM", l: "Opens daily", sub: "Late hours too" },
          ].map((s, i) => (
            <div key={i} className="px-4 py-8 text-center">
              <div className="font-display text-4xl md:text-5xl font-medium text-primary">{s.v}</div>
              <div className="mt-1 text-sm font-medium">{s.l}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-4 leading-tight text-balance">
              A taste of the <em className="text-accent font-medium">Levant</em>, brewed in the desert.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Levante Coffee was born from a love of slow mornings, generous hospitality, and the rich café culture of the Eastern Mediterranean. We pull our espresso with intention, sweeten our matcha with whole dates, and treat every guest like family at the table.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tucked inside Pollack Shoppes II in Chandler, our little corner is where regulars become friends — and first-time visitors leave with a full cup and (sometimes) a free ring.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{i: Heart, t: "Family-run"}, {i: Leaf, t: "Date-sweetened"}, {i: Coffee, t: "Specialty beans"}].map(({i:Icon, t}, k) => (
                <div key={k} className="rounded-xl border border-border bg-card p-4 text-center shadow-soft">
                  <Icon className="h-5 w-5 mx-auto text-accent" />
                  <div className="mt-2 text-sm font-medium">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={interiorImg} alt="Inside Levante Coffee" loading="lazy" width={1600} height={1024} className="rounded-2xl shadow-warm w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-warm max-w-[220px] hidden md:block">
              <div className="font-display text-3xl font-medium leading-none">4.9★</div>
              <div className="text-sm mt-2 opacity-90">"My favorite coffee shop I've ever been to."</div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">The Menu</span>
              <h2 className="font-display text-4xl md:text-6xl font-light mt-3 leading-tight">The full menu</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Espresso, hand-whisked matcha, signature specialty drinks, and house-baked pastries — every detail priced and ready.</p>
          </div>

          {/* SPECIALTY DRINKS */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="font-display text-2xl md:text-3xl font-medium">Specialty Drinks</h3>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 mb-8 text-sm">
              {specialtySizes.map((s, i) => (
                <span key={s} className="text-muted-foreground">
                  <span className="font-medium text-foreground">{s}</span>
                  <span className="ml-2 text-accent font-display">{specialtyPrices[i]}</span>
                </span>
              ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialties.map((item, i) => (
                <Card key={i} className="overflow-hidden bg-card border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
                  {item.img && (
                    <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                      <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-5">
                    <h4 className="font-display text-lg font-medium leading-snug">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* HOT OR ICED PRICE TABLE */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="h-5 w-5 text-accent" />
              <h3 className="font-display text-2xl md:text-3xl font-medium">Hot or Iced</h3>
            </div>
            <Card className="overflow-hidden border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-secondary/60 text-left">
                      <th className="px-5 py-3 font-medium">Drink</th>
                      {drinkSizes.map((s) => (
                        <th key={s} className="px-5 py-3 font-medium text-right whitespace-nowrap">{s}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {hotIcedDrinks.map((d, i) => (
                      <tr key={d.name} className={i % 2 === 0 ? "bg-background/40" : ""}>
                        <td className="px-5 py-3 font-display">{d.name}</td>
                        {d.prices.map((p, j) => (
                          <td key={j} className="px-5 py-3 text-right text-accent font-display whitespace-nowrap">{p ?? "—"}</td>
                        ))}
                      </tr>
                    ))}
                    {singleSizeDrinks.map((d, i) => (
                      <tr key={d.name} className={(hotIcedDrinks.length + i) % 2 === 0 ? "bg-background/40" : ""}>
                        <td className="px-5 py-3 font-display">{d.name}</td>
                        <td className="px-5 py-3 text-right text-accent font-display whitespace-nowrap" colSpan={drinkSizes.length}>{d.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* EXTRAS + SYRUPS */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-xl font-medium">$1 Extras</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Add to any drink</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {extras.map((e) => (
                  <li key={e} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">+</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-xl font-medium">Flavors & Syrups</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">SF = Sugar Free</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {syrups.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-foreground/80">{s}</span>
                ))}
              </div>
            </Card>
          </div>

          {/* BAKERY */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-5 w-5 text-accent" />
              <h3 className="font-display text-2xl md:text-3xl font-medium">Bakery & Pastries</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bakery.map((b) => (
                <Card key={b.name} className="p-5 bg-card border-border flex justify-between items-baseline gap-3">
                  <span className="font-display">{b.name}</span>
                  {b.price && <span className="text-accent font-display whitespace-nowrap">{b.price}</span>}
                </Card>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12">Full menu also at <a className="underline underline-offset-4 hover:text-accent" href="https://levantecoffee.com" target="_blank" rel="noreferrer">levantecoffee.com</a></p>
        </div>
      </section>

      {/* REVIEW SUMMARY */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="md:col-span-1">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Real Google Reviews</span>
              <h2 className="font-display text-4xl md:text-6xl font-light mt-3 leading-tight">Loved by the neighborhood.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="text-center">
                <div className="font-display text-7xl font-medium text-primary leading-none">4.9</div>
                <div className="flex justify-center gap-1 mt-2 text-gold">
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">219 reviews</div>
              </div>
              <div className="space-y-2">
                {[{s:5,p:96},{s:4,p:3},{s:3,p:1},{s:2,p:0},{s:1,p:0}].map(r => (
                  <div key={r.s} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-muted-foreground">{r.s}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gold" style={{ width: `${r.p}%` }} />
                    </div>
                    <span className="w-10 text-right text-muted-foreground text-xs">{r.p}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((t, i) => (
              <Badge key={i} variant="outline" className="rounded-full border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors py-1.5 px-3 cursor-default">
                {t}
              </Badge>
            ))}
          </div>

          <ReviewsList />
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 50%)" }} />
        <div className="container relative grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Come Visit</span>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-3 leading-tight">Pull up a chair.<br/>The kettle's on.</h2>
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-gold mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Pollack Shoppes II</div>
                  <div className="text-cream/80 text-sm">2330 N Alma School Rd #134<br/>Chandler, AZ 85224</div>
                  <div className="text-xs text-cream/60 mt-1">Located in: Ninja Japanese Restaurant</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-gold mt-1 shrink-0" />
                <a href="tel:6022091241" className="hover:text-gold transition-colors">(602) 209-1241</a>
              </div>
              <div className="flex gap-4">
                <Globe className="h-5 w-5 text-gold mt-1 shrink-0" />
                <a href="https://levantecoffee.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">levantecoffee.com</a>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-gold mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Hours</div>
                  <div className="text-cream/80 text-sm grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
                    <span>Mon – Thu</span><span>8 AM – 9 PM</span>
                    <span>Fri – Sat</span><span>8 AM – 11 PM</span>
                    <span>Sunday</span><span>9 AM – 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://maps.google.com/?q=Levante+Coffee+Chandler+AZ" target="_blank" rel="noreferrer">Get Directions</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-cream/40 text-cream hover:bg-cream/10 hover:text-cream">
                <a href="tel:6022091241">Call Us</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Dine-in", "Curbside pickup", "No-contact delivery", "Order online"].map(s => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-cream/20 text-cream/80">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-warm aspect-square md:aspect-auto md:min-h-[500px] bg-card">
            <iframe
              title="Levante Coffee location"
              src="https://www.google.com/maps?q=2330+N+Alma+School+Rd+%23134,+Chandler,+AZ+85224&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <Coffee className="h-5 w-5 text-accent" /> Levante Coffee
          </div>
          <div className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Levante Coffee · Chandler, AZ · Made with ❤️ and a lot of espresso
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#menu" className="text-muted-foreground hover:text-accent">Menu</a>
            <a href="#reviews" className="text-muted-foreground hover:text-accent">Reviews</a>
            <a href="#visit" className="text-muted-foreground hover:text-accent">Visit</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
