import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-wedding-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/img/9ba35e4a-2b5a-4d7a-920b-805291ca6f41.jpg" 
                alt="Wedding rings" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Main Invitation */}
          <div className="space-y-8">
            <h1 className="font-cormorant text-6xl md:text-8xl font-light text-wedding-gold mb-4">
              Приглашение
            </h1>
            
            <div className="space-y-4">
              <p className="font-montserrat text-lg md:text-xl text-muted-foreground tracking-wide">
                Дорогие друзья и близкие!
              </p>
              
              <p className="font-montserrat text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
                Мы рады пригласить вас разделить с нами один из самых важных 
                и счастливых дней в нашей жизни
              </p>
            </div>

            {/* Names */}
            <div className="py-8">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <h2 className="font-cormorant text-3xl md:text-4xl text-wedding-gold">
                    Имя Невесты
                  </h2>
                </div>
                <Icon name="Heart" className="text-wedding-gold w-8 h-8" />
                <div className="text-center">
                  <h2 className="font-cormorant text-3xl md:text-4xl text-wedding-gold">
                    Имя Жениха
                  </h2>
                </div>
              </div>
            </div>

            {/* Date */}
            <Card className="max-w-md mx-auto p-8 bg-wedding-champagne/50 border-wedding-gold/30">
              <div className="text-center space-y-4">
                <Icon name="Calendar" className="text-wedding-gold w-8 h-8 mx-auto" />
                <div>
                  <p className="font-montserrat text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Дата торжества
                  </p>
                  <h3 className="font-cormorant text-4xl text-wedding-gold font-medium">
                    18 июля 2026
                  </h3>
                  <p className="font-montserrat text-lg text-foreground mt-2">
                    Суббота
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-wedding-blush/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Icon name="MapPin" className="text-wedding-gold w-8 h-8 mx-auto mb-4" />
            <h2 className="font-cormorant text-4xl text-wedding-gold mb-4">
              Место проведения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <Card className="p-8 text-center bg-card border-wedding-gold/30">
              <Icon name="Church" className="text-wedding-gold w-10 h-10 mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl text-wedding-gold mb-4">
                Церемония
              </h3>
              <div className="space-y-2">
                <p className="font-montserrat text-lg font-medium">
                  Сарапульский ЗАГС
                </p>
                <p className="font-montserrat text-muted-foreground">
                  г. Сарапул
                </p>
                <div className="pt-2">
                  <p className="font-montserrat text-sm text-muted-foreground">
                    Время: 15:00
                  </p>
                </div>
              </div>
            </Card>

            {/* Reception */}
            <Card className="p-8 text-center bg-card border-wedding-gold/30">
              <Icon name="Utensils" className="text-wedding-gold w-10 h-10 mx-auto mb-4" />
              <h3 className="font-cormorant text-2xl text-wedding-gold mb-4">
                Банкет
              </h3>
              <div className="space-y-2">
                <p className="font-montserrat text-lg font-medium">
                  Ресторан
                </p>
                <p className="font-montserrat text-muted-foreground">
                  Адрес уточняется
                </p>
                <div className="pt-2">
                  <p className="font-montserrat text-sm text-muted-foreground">
                    Время: 17:00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Icon name="Mail" className="text-wedding-gold w-8 h-8 mx-auto mb-6" />
          <h2 className="font-cormorant text-4xl text-wedding-gold mb-6">
            Подтверждение присутствия
          </h2>
          
          <Card className="p-8 bg-wedding-champagne/30 border-wedding-gold/30">
            <p className="font-montserrat text-lg mb-6 text-foreground">
              Пожалуйста, подтвердите своё присутствие до 1 июля 2026 года
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Phone" className="text-wedding-gold w-5 h-5" />
                <span className="font-montserrat">+7 (XXX) XXX-XX-XX</span>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Mail" className="text-wedding-gold w-5 h-5" />
                <span className="font-montserrat">email@example.com</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="space-y-4">
          <p className="font-cormorant text-2xl text-wedding-gold">
            С любовью и нетерпением
          </p>
          <p className="font-montserrat text-muted-foreground">
            До встречи на нашем празднике!
          </p>
        </div>
      </footer>
    </div>
  );
}