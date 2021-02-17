var app = new Vue({
  el: '#app',
  data: {
    navbar: ['Home','Pages','Courses','Feauters','Blog','Shop'],
    explore: ['Start here','Success story','Blog','Courses','About us','Contact us'],
    information: ['Membership','Purchase guide','Privacy policy','Terms of services'],
    social: ['facebook-square', 'twitter' , 'instagram' , 'linkedin'],
    learners:
    [
      {
        titolo: 'Its a choice of quality for peopole with special needs',
        paragrafo: 'Im a very strict person so I require everything to be organized and neat. Then, I ll be able to make things right and shine. MaxCoach guys just got me.',
        immagine: 'testimonial-avata-03',
        nome: 'Florence themes',
        lavoro: ' / Multimedia Admin',
      },
      {
        titolo: 'High level of efficiency and scientific teaching methods',
        paragrafo: 'I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.',
        immagine: 'testimonial-avata-02',
        nome: 'Mina Hollace',
        lavoro: '/ Freelancer',
      },
      {
        titolo: 'Professional team of specialist and passionate mentors at reach',
        paragrafo: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        immagine: 'testimonial-avata-04',
        nome: 'Madley Pondor',
        lavoro: '/ IT Specialist',
      }
    ],
    address:
    [
    {
      indirizzo: '382 NE 191st St # 87394 Miami, FL 33179-3899',
      telefono: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)' ,
      email: 'support@maxcoach.com'
    }
    ],
    corsi:
    [
      {
        immagine: 'course-02-480x298',
        prezzo: '$ 40,00',
        titolo: 'Learning to Write as a Professional Author',
        lezioni: '20 Lessons',
        studenti: '50 Students',
      },
      {
        immagine: 'stock-full-hd-03-480x298',
        prezzo: 'Free',
        titolo: 'Customer-centric Info-Tech Strategies',
        lezioni: '24 Lessons',
        studenti: '769 Students',
      },
      {
        immagine: 'stock-full-hd-04-480x298',
        prezzo: '$ 19,00',
        titolo: 'Open Programming Courses for Everyone: Phyton',
        lezioni: '17 Lessons',
        studenti: '62 Students',
      },
      {
        immagine: 'stock-full-hd-06-480x298',
        prezzo: '$ 26,00',
        titolo: 'Academic Listening and Note-taking',
        lezioni: '14 Lessons',
        studenti: '67 Students',
      },
      {
        immagine: 'course-featured-image-01-480x298',
        prezzo: '$ 39,00',
        titolo: 'Master JQuery in a short period of time',
        lezioni: '6 Lessons',
        studenti: '51 Students',
      },
      {
        immagine: 'stock-full-hd-05-480x298',
        prezzo: '$ 59,00',
        titolo: 'Introduction to Javascript for Beginners',
        lezioni: '14 Lessons',
        studenti: '76 Students',
      }
    ],
    statistiche:
    [
      {
        verbo: 'Successfully trained',
        numero: '1790',
        obbiettivo: 'enrolled learnes',
      },
      {
        verbo: 'Proudly Received',
        numero: '19',
        obbiettivo: 'countrywide awards',
      },
      {
        verbo: 'Firmly established',
        numero: '24',
        obbiettivo: 'local branches',
      },
      {
        verbo: 'Gettin Featured on',
        numero: '1090',
        obbiettivo: 'blog posts',
      }
    ],
  },
});
