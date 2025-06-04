import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      title: "Каучуки и эластомеры",
      description: "Натуральные и синтетические каучуки для производства шин",
      categories: ["НК", "СКИ", "СКМС", "БК"],
    },
    {
      title: "Вулканизующие агенты",
      description: "Сера техническая, ускорители вулканизации",
      categories: ["Сера", "Ускорители", "Активаторы"],
    },
    {
      title: "Наполнители",
      description: "Технический углерод, кремнекислота, мел",
      categories: ["Сажа", "Кремнекислота", "Мел", "Каолин"],
    },
    {
      title: "Пластификаторы",
      description: "Масла-пластификаторы для улучшения пластичности",
      categories: ["Ароматические", "Нафтеновые", "Парафиновые"],
    },
    {
      title: "Антиоксиданты",
      description: "Защита от старения и окисления резиновых изделий",
      categories: ["Фенольные", "Аминные", "Фосфитные"],
    },
    {
      title: "Технические добавки",
      description: "Красители, стабилизаторы, антипирены",
      categories: ["Красители", "UV-стабилизаторы", "Антипирены"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Наша продукция
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный ассортимент химического сырья для шинной промышленности и
            производства РТИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
