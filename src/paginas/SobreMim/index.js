import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>
        Olá, Eu sou o Matheus!
      </h3>

      <img src={fotoSobreMim} alt="Foto do Matheus" className={styles.fotoSobreMim} />
      
      <p className={styles.paragrafo}>
      Olá! Meu nome é Matheus Carvalho, tenho 21 anos e sou desenvolvedor Front-End júnior (Front-End developer). Atualmente estou buscando uma oportunidade para adquirir experiência e me inserir no mercado de trabalho.
      </p>
      
      <p className={styles.paragrafo}>
      Comecei a estudar programação em 2019 quando entrei na Universidade Salvador (UNIFACS) para cursar ciência da computação, no início tive muitas dificuldades pois não tinha nenhuma base e nem conhecimento de programação, mas com muito esforço e estudo consegui acompanhar e me destacar na faculdade, sempre tirando boas notas e ajudando outros colegas de sala. Em 2022 assinei a plataforma Alura, a qual fez expandir meus conhecimentos e abrir um novo horizonte de possibilidades. Na Alura me especializei na área de Front-End focando meus estudos em HTML, CSS, JavaScript e React. 
      </p>
      
      <p className={styles.paragrafo}>
      Em meio a pandemia tentei buscar oportunidades de estágio na área de programação. 99% das vagas eram remotas e não consegui ter êxito nos processos seletivos. Então assim que começaram a retornar os trabalhos presenciais e como tinha uma carga horária obrigatória para cumprir aceitei um estágio na área de suporte de TI. Nesse estágio minhas funções eram dar suporte aos usuários de computadores da empresa, realizar manutenção e otimização dos computadores, gerenciar o servidor e manusear o sistema de inventário da empresa para sempre manter os registros atualizados. Por mais que não tenha conseguido entrar na área que eu desejei, o meu estágio foi muito importante para meu desenvolvimento, sendo a minha primeira experiência profissional. No meu estágio desenvolvi habilidades de comunicação, resolução rápida e dinâmica de problemas e flexibilidade diante das demandas que iam surgindo. 
      </p>
      
      <p className={styles.paragrafo}>
      Em dezembro de 2022 conclui o meu curso de ciência da computação e estou em busca de uma nova oportunidade, agora como desenvolvedor Front-End, área em que eu sonho em trabalhar e me desenvolver. Estou sempre mantendo uma rotina de estudos e praticando para dominar novas ferramentas e aprimorar minhas habilidades de desenvolvimento de código, tentando sempre desenvolver códigos práticos, eficientes e com boa estrutura. 
      </p>
      
      <p className={styles.paragrafo}>
      Sou criativo, proativo, paciente e de aprendizado rápido, sempre tentando uma resolução de problemas de forma dinâmica, adaptativo e contribuindo com soluções criativas e eficientes.
      </p>
      
    </PostModelo>
  )
}





 


