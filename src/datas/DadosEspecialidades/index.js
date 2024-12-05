import pediatriaLogo from "../../assets/ped-button.png";
import neuroLogo from "../../assets/neuro-button.png";
import fonoLogo from "../../assets/fono-button.png";
import fisioLogo from "../../assets/fisio-button.png";

export default function DadosEspecialidades() {
  return [
    {
      imagem: pediatriaLogo,
      nome: "Pediatria",
      descricao:
        "Nossos pediatras são referência no cuidado infantil, com anos de experiência e um verdadeiro amor pelo que fazem. Na nossa clínica, cada criança recebe atenção dedicada e personalizada, garantindo o cuidado que ela merece.",
    },
    {
      imagem: neuroLogo,
      nome: "Neurologia",
      descricao:
        "Nossos neurologistas são altamente qualificados, com vasta experiência no cuidado infantil. Eles tratam cada paciente de maneira individualizada, com compromisso e conhecimento especializado para garantir os melhores resultados.",
    },
    {
      imagem: fonoLogo,
      nome: "Fonoaudiologia",
      descricao:
        "Nossa equipe de fonoaudiólogos é formada por especialistas apaixonados por desenvolver habilidades de comunicação. Cada criança recebe atendimento acolhedor e focado em seu progresso, garantindo resultados eficientes e personalizados.",
    },
    {
      imagem: fisioLogo,
      nome: "Fisioterapia",
      descricao:
        "Nossos fisioterapeutas são comprometidos com o desenvolvimento físico infantil, utilizando abordagens lúdicas e modernas. Cada criança recebe atenção individualizada e um tratamento eficaz para alcançar o máximo potencial motor.",
    },
  ];
}
