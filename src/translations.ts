type Translations = {
  [key: string]: {
    title: string;
    subtitle: string;
    enterAge: string;
    yearsOld: string;
    result: string;
    maxAge: string;
    perceivedAge: string;
    graph: string;
    about: {
      title: string;
      description: string;
      modelsTitle: string;
      realTimeModel: string;
      realTimeDesc: string;
      subjectiveTimeModel: string;
      subjectiveTimeDesc: string;
      quote: string;
      source: string;
    };
  };
};

export const translations: Translations = {
  en: {
    title: "Time Perception Calculator",
    subtitle: "Explore how our perception of time changes as we age.",
    enterAge: "Enter Your Age",
    yearsOld: "years old",
    result: "Result",
    maxAge: "Maximum Age",
    perceivedAge: "Perceived Age",
    graph: "Time Perception Graph",
    about: {
      title: "About Time Perception",
      description: "The perception of time tends to speed up as we age, a phenomenon that has been studied and modeled in various ways. This calculator uses two different models to estimate how time might feel at different ages:",
      modelsTitle: "Models Explained",
      realTimeModel: "Proportional to Real Time",
      realTimeDesc: "This model suggests that our perception of time is logarithmic, meaning each subsequent year feels shorter than the last.",
      subjectiveTimeModel: "Proportional to Subjective Time",
      subjectiveTimeDesc: "This model proposes that our perception of time is related to the ratio of a time period to our total age.",
      quote: "A proportional theory of time perception would suggest that a year feels much longer to a child than to an adult because it represents a larger proportion of the child's total life experience.",
      source: "Wikipedia - Time Perception: Changes with Age"
    }
  },
  es: {
    title: "Calculadora de Percepción del Tiempo",
    subtitle: "Explora cómo cambia nuestra percepción del tiempo a medida que envejecemos.",
    enterAge: "Ingresa tu Edad",
    yearsOld: "años",
    result: "Resultado",
    maxAge: "Edad Máxima",
    perceivedAge: "Edad Percibida",
    graph: "Gráfico de Percepción del Tiempo",
    about: {
      title: "Sobre la Percepción del Tiempo",
      description: "La percepción del tiempo tiende a acelerarse a medida que envejecemos, un fenómeno que ha sido estudiado y modelado de varias maneras. Esta calculadora utiliza dos modelos diferentes para estimar cómo podría sentirse el tiempo a diferentes edades:",
      modelsTitle: "Modelos Explicados",
      realTimeModel: "Proporcional al Tiempo Real",
      realTimeDesc: "Este modelo sugiere que nuestra percepción del tiempo es logarítmica, lo que significa que cada año subsiguiente se siente más corto que el anterior.",
      subjectiveTimeModel: "Proporcional al Tiempo Subjetivo",
      subjectiveTimeDesc: "Este modelo propone que nuestra percepción del tiempo está relacionada con la proporción de un período de tiempo respecto a nuestra edad total.",
      quote: "Una teoría proporcional de la percepción del tiempo sugeriría que un año se siente mucho más largo para un niño que para un adulto porque representa una proporción mayor de la experiencia de vida total del niño.",
      source: "Wikipedia - Percepción del Tiempo: Cambios con la Edad"
    }
  }
};