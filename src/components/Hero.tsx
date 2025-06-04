import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">ХимТрейд</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Ведущий поставщик химического сырья для шинных заводов и предприятий
          резинотехнических изделий. Более 15 лет на рынке оптовых поставок.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Каталог продукции
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-800"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
