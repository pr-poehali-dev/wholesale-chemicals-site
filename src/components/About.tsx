import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">О компании</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Надежный партнер в сфере химического сырья с многолетним опытом
            работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-blue-600">
                15+ лет
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Опыт работы на рынке химического сырья
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-blue-600">500+</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Довольных клиентов по всей России</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-blue-600">24/7</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Техническая поддержка и консультации
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
