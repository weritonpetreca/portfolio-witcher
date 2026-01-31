# 🐺 Weriton Petreca - The Witcher Portfolio

> "Não sou apenas um programador; sou um solucionador de problemas forjado na engenharia."

![Status](https://img.shields.io/website?url=https%3A%2F%2Fweriton.dev&label=weriton.dev&style=for-the-badge&color=success)
![AWS](https://img.shields.io/badge/Infrastructure-AWS_Serverless-orange?style=for-the-badge&logo=amazon-aws)
![Java](https://img.shields.io/badge/Stack-Java_&_Spring-red?style=for-the-badge&logo=java)

Este repositório contém o código-fonte do meu portfólio profissional, desenhado com a temática do universo **The Witcher**. Mais do que uma página web, este projeto é uma demonstração prática de **Cloud Infrastructure** e otimização de custos.

🔗 **Acesse a fortaleza:** [weriton.dev](https://weriton.dev)

---

## 🏰 Arquitetura da Solução (Infraestrutura)

Diferente de hospedagens tradicionais, este projeto utiliza uma arquitetura **Serverless** robusta na AWS, garantindo alta disponibilidade, segurança HTTPS e custo próximo de zero.

### O Fluxo de Dados:
1.  **Cloudflare (DNS):** Gerencia o domínio `.dev` e atua como primeira camada de proteção.
2.  **AWS CloudFront (CDN):** Entrega o conteúdo estático globalmente com baixa latência e gerencia o certificado SSL/TLS.
3.  **AWS S3 (Storage):** Armazena os arquivos estáticos (`html`, `css`, `img`) com acesso público bloqueado (OAC).
4.  **AWS ACM:** Gerencia o certificado de segurança para garantir a criptografia ponta a ponta.

---

## ⚔️ Arsenal Tecnológico

### Front-End (O Códice)
* **HTML5 & CSS3:** Semântico e responsivo.
* **AOS Library:** Animações de scroll ("Animate On Scroll").
* **Design:** Temática "Dark Fantasy/Medieval" com fontes personalizadas (*MedievalSharp*).

### Cloud & DevOps (A Alquimia)
* **Amazon S3:** Hospedagem estática segura.
* **Amazon CloudFront:** Cache e distribuição de conteúdo.
* **Amazon Certificate Manager (ACM):** Segurança SSL.
* **Cloudflare:** Gestão de DNS inteligente.
* **GitHub Actions:** CI/CD para deploy automático no S3.

---

## 🛠️ Como Executar Localmente

Se você deseja inspecionar o código ou testar alterações em sua própria máquina:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/weritonpetreca/portfolio-witcher.git
    ```
2.  **Abra o arquivo:**
    Basta abrir o arquivo `index.html` em qualquer navegador moderno. Não é necessário servidor local (Node/Apache) para visualização básica.

---

## 📜 Contratos e Projetos

Este portfólio serve como hub para meus principais projetos Back-End:

* **Vivaldi Bank Core:** API financeira com Arquitetura Hexagonal e AWS.
* **Already Read That:** API de catálogo de leituras com Gamificação (Java 21, Spring Boot).
* **PetrecaDelivery:** Microsserviços com arquitetura orientada a eventos (Kafka, DDD).

---

## 🧙‍♂️ Autor

**Weriton Luis Petreca**
*Aspirante a Mestre da Nuvem & Desenvolvedor Back-End*

* [LinkedIn](https://www.linkedin.com/in/weriton-petreca)
* [Credly (Certificações)](https://www.credly.com/users/weriton-luis-petreca)

---
*Forjado com café, código e a disciplina da Escola da Nuvem.*
