import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Терапевтическая стоматология",
      description: "Лечение кариеса, пульпита, периодонтита. Профессиональная гигиена полости рта.",
      price: "от 2 500 ₽",
      icon: "Stethoscope"
    },
    {
      title: "Хирургическая стоматология",
      description: "Удаление зубов, имплантация, пластика десен. Современные методы без боли.",
      price: "от 5 000 ₽",
      icon: "Activity"
    },
    {
      title: "Ортопедия",
      description: "Протезирование зубов, коронки, виниры. Восстанавливаем красивую улыбку.",
      price: "от 15 000 ₽",
      icon: "Shield"
    },
    {
      title: "Ортодонтия",
      description: "Исправление прикуса брекетами и элайнерами. Ровные зубы в любом возрасте.",
      price: "от 80 000 ₽",
      icon: "Smile"
    }
  ];

  const doctors = [
    {
      name: "Иванова Анна Сергеевна",
      specialty: "Главный врач, терапевт",
      experience: "15 лет опыта",
      description: "Кандидат медицинских наук, специалист по эстетической стоматологии"
    },
    {
      name: "Петров Михаил Владимирович",
      specialty: "Хирург-имплантолог",
      experience: "12 лет опыта",
      description: "Специалист по сложным случаям имплантации и костной пластике"
    },
    {
      name: "Сидорова Елена Игоревна",
      specialty: "Ортодонт",
      experience: "10 лет опыта",
      description: "Сертифицированный специалист по брекет-системам и элайнерам"
    }
  ];

  const reviews = [
    {
      name: "Мария К.",
      rating: 5,
      text: "Отличная клиника! Лечила зубы у доктора Ивановой - все быстро и безболезненно. Персонал очень вежливый.",
      service: "Лечение кариеса"
    },
    {
      name: "Александр В.",
      rating: 5,
      text: "Поставил имплант у доктора Петрова. Операция прошла идеально, заживление быстрое. Рекомендую!",
      service: "Имплантация"
    },
    {
      name: "Светлана М.",
      rating: 5,
      text: "Исправляла прикус элайнерами. Результат превзошел ожидания! Спасибо доктору Сидоровой.",
      service: "Ортодонтия"
    }
  ];

  const promotions = [
    {
      title: "Профессиональная гигиена",
      description: "Комплексная чистка зубов со скидкой 30%",
      oldPrice: "4 000 ₽",
      newPrice: "2 800 ₽",
      until: "до 31 января"
    },
    {
      title: "Имплантация под ключ",
      description: "Имплант + коронка со скидкой 20%",
      oldPrice: "50 000 ₽",
      newPrice: "40 000 ₽",
      until: "до 15 февраля"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Rubik, sans-serif' }}>
                DentaLife
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="story-link text-slate-600 hover:text-primary">Услуги</a>
              <a href="#doctors" className="story-link text-slate-600 hover:text-primary">Врачи</a>
              <a href="#reviews" className="story-link text-slate-600 hover:text-primary">Отзывы</a>
              <a href="#contacts" className="story-link text-slate-600 hover:text-primary">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-primary/5"></div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-6">
                <Icon name="Award" size={16} className="mr-2" />
                Лицензированная клиника с 2010 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Здоровые зубы - <br />
                <span className="text-primary">красивая улыбка</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Современная стоматология в центре города. Безболезненное лечение, 
                гарантия качества и индивидуальный подход к каждому пациенту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/53795e6c-39ed-452a-9660-528043e7336e.jpg" 
                alt="Современная стоматологическая клиника DentaLife"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр стоматологических услуг с использованием современного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-sm">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Акции и специальные предложения
            </h2>
            <p className="text-xl text-slate-600">
              Выгодные условия для новых пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="hover-scale animate-fade-in border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="destructive">Акция</Badge>
                    <span className="text-sm text-slate-500">{promo.until}</span>
                  </div>
                  <CardTitle style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {promo.title}
                  </CardTitle>
                  <CardDescription>{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-slate-500 line-through">{promo.oldPrice}</span>
                    <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {promo.newPrice}
                    </span>
                  </div>
                  <Button className="w-full mt-4">
                    Записаться на акцию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Наши врачи
            </h2>
            <p className="text-xl text-slate-600">
              Команда опытных специалистов с высшим медицинским образованием
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover-scale animate-fade-in text-center">
                <CardHeader>
                  {index === 0 ? (
                    <img 
                      src="/img/13e05bb0-b5d8-4b04-8ae5-82ca46f42cb5.jpg" 
                      alt={doctor.name}
                      className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="mx-auto mb-4 w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
                      <Icon name="User" size={48} className="text-slate-500" />
                    </div>
                  )}
                  <CardTitle style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {doctor.name}
                  </CardTitle>
                  <div className="text-primary font-medium">{doctor.specialty}</div>
                  <Badge variant="secondary">{doctor.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {doctor.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4">
                    Записаться к врачу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Отзывы пациентов
            </h2>
            <p className="text-xl text-slate-600">
              Мы гордимся доверием наших пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {review.name}
                    </CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm italic">
                    "{review.text}"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Контакты
            </h2>
            <p className="text-xl text-slate-600">
              Мы находимся в центре города, удобная транспортная доступность
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Информация для записи
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>г. Москва, ул. Тверская, д. 15, стр. 1</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@dentalife.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Как добраться:</h4>
                <p className="text-slate-600 text-sm">
                  • Метро "Тверская" - 3 минуты пешком<br />
                  • Метро "Пушкинская" - 5 минут пешком<br />
                  • Парковка для пациентов во дворе
                </p>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Записаться на прием
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Имя и фамилия</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Услуга</label>
                  <select className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Выберите услугу</option>
                    <option>Консультация</option>
                    <option>Лечение кариеса</option>
                    <option>Профессиональная гигиена</option>
                    <option>Имплантация</option>
                    <option>Протезирование</option>
                  </select>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Activity" size={24} className="text-primary" />
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  DentaLife
                </h3>
              </div>
              <p className="text-slate-300 text-sm">
                Современная стоматологическая клиника с полным спектром услуг. 
                Качественное лечение, профессиональные врачи, современное оборудование.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <a href="#services" className="block text-slate-300 hover:text-white">Услуги</a>
                <a href="#doctors" className="block text-slate-300 hover:text-white">Врачи</a>
                <a href="#reviews" className="block text-slate-300 hover:text-white">Отзывы</a>
                <a href="#contacts" className="block text-slate-300 hover:text-white">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>г. Москва, ул. Тверская, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@dentalife.ru</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-600" />
          <div className="text-center text-sm text-slate-400">
            <p>&copy; 2024 DentaLife. Все права защищены. Лицензия № ЛО-77-01-012345</p>
          </div>
        </div>
      </footer>
    </div>
  );
}