// ts (Date) – дата события,
// level (int) – уровень события (1 – debug, 2 – info и т.д.),
// message (string)  – текст сообщения.

const data = {
  events: [
    {
      id: 55,
      date: new Date('05.04.1990'),
      level: 1,
      message: 'Okay!',
    },
    {
      id: 2,
      date: new Date('04.20.2021'),
      level: 1,
      message: 'Best!',
    },
    {
      id: 4,
      date: new Date('08.02.2002'),
      level: 2,
      message: 'Message!',
    },
    {
      id: 30,
      date: new Date('01.01.2001'),
      level: 2,
      message: 'Alarm! Alarm! Alarm! Alarm!',
    },
  ],
};

export default data;
