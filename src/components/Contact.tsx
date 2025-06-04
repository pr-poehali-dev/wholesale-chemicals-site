import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для получения персонального предложения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white">Офис продаж</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-3">
                <p>📍 г. Москва, ул. Промышленная, д. 15</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 sales@himtrade.ru</p>
                <p>🕒 Пн-Пт: 9:00-18:00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardHeader>
              <CardTitle className="text-white">Склад</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-3">
                <p>📍 Московская обл., г. Подольск</p>
                <p>📞 +7 (495) 765-43-21</p>
                <p>📧 warehouse@himtrade.ru</p>
                <p>🚛 Доставка по России</p>
              </div>
              <Button className="mt-4 w-full" variant="outline">
                Запросить прайс-лист
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
