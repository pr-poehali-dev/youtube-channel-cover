import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Application {
  id: number;
  name: string;
  phone: string;
  email: string;
  startDate: string;
  createdAt: string;
  status: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://functions.poehali.dev/5281f5f5-abec-4e2b-a5c5-41e3eba0a0e0'
      );
      const data = await response.json();

      if (response.ok) {
        setApplications(data.applications || []);
        setError(null);
      } else {
        setError(data.error || 'Ошибка загрузки данных');
      }
    } catch (err) {
      setError('Не удалось загрузить заявки');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Админ-панель
            </h1>
            <p className="text-muted-foreground">Управление заявками на курс</p>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            <span>На главную</span>
          </a>
        </div>

        <Card className="bg-card border-border shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Users" size={28} className="text-secondary" />
              <span>Заявки на обучение ({applications.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12">
                <Icon
                  name="Loader"
                  size={40}
                  className="text-accent animate-spin mx-auto mb-4"
                />
                <p className="text-muted-foreground">Загрузка заявок...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <Icon
                  name="AlertCircle"
                  size={40}
                  className="text-destructive mx-auto mb-4"
                />
                <p className="text-destructive mb-4">{error}</p>
                <button
                  onClick={fetchApplications}
                  className="text-accent hover:text-secondary transition-colors"
                >
                  Попробовать снова
                </button>
              </div>
            ) : applications.length === 0 ? (
              <div className="text-center py-12">
                <Icon
                  name="Inbox"
                  size={40}
                  className="text-muted-foreground mx-auto mb-4"
                />
                <p className="text-muted-foreground">Заявок пока нет</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Имя</TableHead>
                      <TableHead>Телефон</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Дата начала</TableHead>
                      <TableHead>Дата подачи</TableHead>
                      <TableHead>Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.id}</TableCell>
                        <TableCell>{app.name}</TableCell>
                        <TableCell>
                          <a
                            href={`https://wa.me/${app.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
                          >
                            <Icon name="Phone" size={16} />
                            {app.phone}
                          </a>
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${app.email}`}
                            className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
                          >
                            <Icon name="Mail" size={16} />
                            {app.email}
                          </a>
                        </TableCell>
                        <TableCell>{app.startDate}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {formatDate(app.createdAt)}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={app.status === 'new' ? 'default' : 'secondary'}
                          >
                            {app.status === 'new' ? 'Новая' : app.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-8 bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Как работать с заявками
                </h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Нажмите на телефон для открытия WhatsApp</li>
                  <li>• Нажмите на email для отправки письма</li>
                  <li>• Заявки появляются автоматически в реальном времени</li>
                  <li>
                    • Обновите страницу, чтобы увидеть новые заявки
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
