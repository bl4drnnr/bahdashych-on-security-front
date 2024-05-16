import dayjs from 'dayjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@shared/services/article.service';
import { Article } from '@interfaces/article.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  article: Article;
  articleSlug: string;
  articleNotFound = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
    private readonly sanitizer: DomSanitizer
  ) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }

  getArticleBySlug() {
    this.article = {
      category: 'Security',
      categoryLink: 'security',
      image:
        'https://assets-global.website-files.com/64f8a5805a1caa95358b298b/64f8aab91657617febc2e016_image3.jpeg',
      date: new Date(),
      title: 'Digital Transformation Implementation: A Roadmap for Success',
      content: this.sanitizer.bypassSecurityTrustHtml(
        '<p>The IT space is continually evolving, adapting to the ever-changing landscape of technology and innovation. In this article, we\'ll explore the most prominent trends that are shaping the Information Technology industry, making it one of the most dynamic and critical sectors in the modern world. From the accelerated adoption of artificial intelligence to the ongoing cybersecurity challenges, these trends are influencing how businesses and individuals navigate the digital future.</p><h2>‍<strong>Artificial Intelligence and Machine Learning</strong></h2><p>Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative technologies in the IT space. AI and ML are being employed in a variety of applications, from chatbots and virtual assistants to predictive analytics and recommendation engines. AI-driven decision-making, automation, and personalization are redefining how organizations operate and interact with customers.</p><p>One key driver behind this trend is the vast amount of data generated daily, which AI and ML can analyze to extract valuable insights. As AI continues to advance, businesses are exploring AI-driven solutions to improve efficiency, reduce costs, and enhance the customer experience.</p><h2><strong>Cloud Computing and Edge Computing</strong></h2><p>Cloud computing has revolutionized the way IT services are delivered. Public, private, and hybrid cloud solutions provide businesses with scalable and flexible options for data storage, processing, and applications. The adoption of cloud computing allows organizations to cut costs, increase agility, and improve accessibility.</p><p>Edge computing, on the other hand, is becoming increasingly important in scenarios where low latency is crucial. It involves processing data closer to the source (at the edge of the network) to reduce delays, making it essential for applications like IoT and real-time analytics.</p><h2><strong>Cybersecurity Challenges</strong></h2><p>As technology advances, so do the threats associated with it. Cybersecurity has become a top concern for businesses and individuals alike. The increasing sophistication of cyberattacks, data breaches, and ransomware incidents makes it essential to focus on robust security measures.</p><p>New challenges, such as protecting the Internet of Things (IoT) devices and addressing supply chain vulnerabilities, are emerging. Additionally, regulations like GDPR and CCPA are imposing stricter data protection standards, forcing organizations to invest in stronger security strategies.</p><h2><strong>Remote Work and Collaboration Tools</strong></h2><p>The COVID-19 pandemic accelerated the adoption of remote work and digital collaboration tools. Even as the world emerges from the pandemic, remote work remains a significant trend in the IT space. It has reshaped how organizations operate, with many companies offering permanent remote work options.</p><p>Collaboration tools like Zoom, Microsoft Teams, and Slack have become integral to remote work. The future of work is likely to be hybrid, with a blend of in-person and remote collaboration, making these tools more critical than ever.</p><h2><strong>5G Technology and IoT</strong></h2><p>The rollout of 5G technology is revolutionizing connectivity, enabling faster data transfer and lower latency. This is driving the growth of the Internet of Things (IoT) as more devices become interconnected and capable of real-time data exchange.</p><blockquote>"In the ever-evolving landscape of Information Technology, the only constant is change. Embrace the trends, adapt to the challenges, and navigate the digital future with innovation and resilience."</blockquote><p>From smart cities to autonomous vehicles, 5G and IoT are opening up new possibilities for innovation. This trend is set to impact various industries, including healthcare, logistics, and manufacturing.</p><h2><strong>Quantum Computing</strong></h2><p>Quantum computing is an emerging trend that holds the promise of solving complex problems that classical computers cannot. It relies on quantum bits (qubits) that can exist in multiple states simultaneously, providing an exponential increase in processing power.</p><figure class="article-picture"><img src="https://assets-global.website-files.com/64f8a5805a1caa95358b298b/65336553cf6e222fd9dedd8a_amol-tyagi-0juktkOTkpU-unsplash.jpg" loading="lazy" alt=""></figure><p>While quantum computing is still in its infancy, it has the potential to revolutionize fields like cryptography, drug discovery, and optimization problems. Major tech companies are investing in quantum research, and as the technology matures, it will reshape the IT landscape.</p><h2><strong>Sustainable IT Practices</strong></h2><p>Sustainability is a growing concern in the IT space. The energy consumption of data centers and the environmental impact of electronic waste are issues that the industry is actively addressing. Many organizations are moving towards greener data center designs, and there\'s a growing emphasis on recycling and responsible disposal of electronic equipment.</p><h2><strong>Augmented and Virtual Reality</strong></h2><p>Augmented Reality (AR) and Virtual Reality (VR) are no longer confined to gaming and entertainment. They are finding applications in education, training, healthcare, and design. AR and VR offer immersive and interactive experiences, and as the technology becomes more accessible, it is opening new avenues for innovation.</p><ul role="list"><li>While quantum computing is still in its infancy</li><li>With the increasing collection and utilization of data</li></ul><h2><strong>Blockchain Technology</strong></h2><p>Blockchain technology, initially known for cryptocurrencies, is now being explored for various applications, such as supply chain management, digital identity verification, and secure data sharing. The decentralized and tamper-resistant nature of blockchain offers solutions to address trust and security concerns.</p><h2><strong>Data Privacy and Ethical AI</strong></h2><p>With the increasing collection and utilization of data, concerns about data privacy and ethics have grown. Regulations like GDPR are pushing organizations to be more transparent about data usage. Ethical considerations in AI, such as bias in algorithms and AI-driven decision-making, are also under scrutiny.</p><h2>Conclusion</h2><p>The IT space is in a state of constant evolution, driven by innovation, challenges, and the changing needs of businesses and individuals. Understanding and adapting to these emerging trends is crucial for staying competitive and relevant in this digital age. Whether it\'s harnessing the power of artificial intelligence, addressing cybersecurity concerns, or leveraging the potential of quantum computing, the IT industry continues to shape the world in new and exciting ways. As we navigate the digital future, staying informed and agile is key to success in the IT space.</p>'
      )
    };
    // this.articleService.getArticleBySlug(this.articleSlug).subscribe({
    //   next: (article) => (this.article = {
    //     category: 'Security',
    //     categoryLink: 'security',
    //     image: 'https://assets-global.website-files.com/64f8a5805a1caa95358b298b/64f8aab91657617febc2e016_image3.jpeg',
    //     date: new Date(),
    //     title: 'Digital Transformation Implementation: A Roadmap for Success',
    //     content: ''
    //   }),
    //   error: () => (this.articleNotFound = true)
    // });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const slug = params.get('slug');

      if (!slug) return await this.handleRedirect('blog');

      this.articleSlug = slug;
      this.getArticleBySlug();
    });
  }

  protected readonly dayjs = dayjs;
}
