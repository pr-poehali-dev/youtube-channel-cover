import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
  });

  const courseDates = [
    '23 ноября 2025',
    '10 января 2026',
    '14 марта 2026',
    '23 мая 2026',
    '11 июля 2026',
    '19 сентября 2026',
    '14 ноября 2026',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Скоро свяжемся с вами для подтверждения записи.',
    });
    setFormData({ name: '', phone: '', email: '', startDate: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 31, 44, 0.85), rgba(26, 31, 44, 0.95)), url('https://cdn.poehali.dev/projects/44e51750-260d-49df-8194-5dfc8f77cda0/files/2920a922-1a0b-4e4f-9df5-d5537fde74bd.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-16 animate-fade-in">
            <div className="flex items-center gap-2">
              <Icon name="Hand" size={32} className="text-accent animate-shimmer" />
              <h1 className="text-3xl font-bold text-accent">Хиромантия с Иваном Линтом</h1>
            </div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/89193935188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <a
                href="mailto:iwan891@bk.ru"
                className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span className="hidden md:inline">Email</span>
              </a>
            </div>
          </header>

          <section className="max-w-6xl mx-auto mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <Icon name="Sparkles" size={40} className="text-secondary mb-4 animate-float" />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Откройте тайны судьбы через линии ваших ладоней
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Профессиональный курс по хиромантии от практикующего хироманта Ивана Линта.
                  Научитесь читать прошлое, настоящее и будущее по линиям рук.
                </p>
                <div className="flex flex-wrap gap-4 text-lg">
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="Calendar" size={20} />
                    <span>8 месяцев</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="Users" size={20} />
                    <span>Групповое обучение</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="Video" size={20} />
                    <span>Онлайн</span>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/44e51750-260d-49df-8194-5dfc8f77cda0/files/6625158c-27b2-4572-9485-356306a16cde.jpg"
                  alt="Хиромантия"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary text-background px-6 py-4 rounded-lg shadow-xl">
                  <p className="text-3xl font-bold">80 000₽</p>
                  <p className="text-sm">полный курс</p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24 animate-fade-in">
            <div className="text-center mb-12">
              <Icon name="BookOpen" size={40} className="text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-4 text-foreground">Программа обучения</h3>
              <p className="text-muted-foreground text-lg">
                Комплексная программа от базовых знаний до профессионального уровня
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Star',
                  title: 'Основы хиромантии',
                  desc: 'История, базовые линии и их значения',
                },
                {
                  icon: 'Heart',
                  title: 'Линия сердца',
                  desc: 'Любовь, отношения, эмоциональная жизнь',
                },
                {
                  icon: 'Brain',
                  title: 'Линия головы',
                  desc: 'Интеллект, мышление, ментальное здоровье',
                },
                {
                  icon: 'Zap',
                  title: 'Линия жизни',
                  desc: 'Здоровье, энергия, жизненный путь',
                },
                {
                  icon: 'Coins',
                  title: 'Линия судьбы',
                  desc: 'Карьера, финансы, жизненное предназначение',
                },
                {
                  icon: 'HeartHandshake',
                  title: 'Линия брака',
                  desc: 'Отношения, брак, партнёрство',
                },
                {
                  icon: 'Baby',
                  title: 'Линии детей',
                  desc: 'Количество детей, их характер и судьба',
                },
                {
                  icon: 'Sun',
                  title: 'Линия Солнца',
                  desc: 'Талант, успех, признание и слава',
                },
                {
                  icon: 'Lightbulb',
                  title: 'Линия Меркурия',
                  desc: 'Коммуникация, бизнес, здоровье',
                },
                {
                  icon: 'ThumbsUp',
                  title: 'Линии большого пальца',
                  desc: 'Воля, характер, жизненная сила',
                },
                {
                  icon: 'Fingerprint',
                  title: 'Пальцевый узор и дерматоглифика',
                  desc: 'Уникальные отпечатки и их значение',
                },
                {
                  icon: 'Shapes',
                  title: 'Знаки и символы',
                  desc: 'Треугольники, кресты, звёзды и их толкование',
                },
                {
                  icon: 'Sparkles',
                  title: 'Практика и консультации',
                  desc: 'Реальные кейсы и работа с клиентами',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-accent transition-all hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <Icon name={item.icon as any} size={32} className="text-secondary mb-3" />
                    <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24 animate-fade-in">
            <div className="text-center mb-12">
              <Icon name="CheckCircle" size={40} className="text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-4 text-foreground">Что вы получите</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Video',
                  title: '32 занятия',
                  desc: 'Еженедельные видеоконференции по 60 минут',
                },
                {
                  icon: 'ClipboardList',
                  title: 'Практика',
                  desc: 'Домашние задания с проверкой и обратной связью',
                },
                {
                  icon: 'MessageCircle',
                  title: 'Поддержка',
                  desc: 'Онлайн-сопровождение в течение всего курса',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-card rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-2 border-accent">
                    <Icon name={item.icon as any} size={32} className="text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24 animate-fade-in">
            <div className="text-center mb-12">
              <Icon name="CalendarDays" size={40} className="text-secondary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-4 text-foreground">Расписание запусков</h3>
              <p className="text-muted-foreground text-lg">Выберите удобную дату старта</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courseDates.map((date, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-secondary transition-all hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <Icon name="Calendar" size={24} className="text-accent mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">{date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="registration"
            className="max-w-2xl mx-auto mb-24 animate-scale-in"
          >
            <Card className="bg-card border-accent shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Icon name="PenTool" size={40} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Записаться на курс</h3>
                  <p className="text-muted-foreground">
                    Заполните форму, и мы свяжемся с вами для подтверждения
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Ваше имя
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="startDate" className="text-foreground">
                      Дата начала курса
                    </Label>
                    <Select
                      required
                      value={formData.startDate}
                      onValueChange={(value) =>
                        setFormData({ ...formData, startDate: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите дату" />
                      </SelectTrigger>
                      <SelectContent>
                        {courseDates.map((date, index) => (
                          <SelectItem key={index} value={date}>
                            {date}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-background font-semibold text-lg py-6"
                  >
                    Записаться на курс
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          <footer className="text-center pb-8 text-muted-foreground">
            <div className="mb-6">
              <img
                src="https://cdn.poehali.dev/projects/44e51750-260d-49df-8194-5dfc8f77cda0/files/b3e86422-2aab-482e-871b-2bccbfbb8ea6.jpg"
                alt="Обучение хиромантии"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-xl mb-8"
              />
            </div>
            <p className="text-lg mb-4">Контакты для связи:</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/89193935188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
              >
                <Icon name="Phone" size={20} />
                <span>WhatsApp: +7 (919) 393-51-88</span>
              </a>
              <span className="hidden md:inline text-border">•</span>
              <a
                href="mailto:iwan891@bk.ru"
                className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
              >
                <Icon name="Mail" size={20} />
                <span>iwan891@bk.ru</span>
              </a>
            </div>
            <p className="mt-8 text-sm">
              © 2025 Хиромант Иван Линт. Все права защищены.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;