import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {}

  getBioData() {
    return {
      description: "Hello everyone, my name is Sarawut Kengkan , y'all can call me Bas🏀. I'm a fresh graduated with bachelor degree of economics who is passionate in coding and the role as developer. After graduated from CMU, i have been studying in data analysis tools such as python, R, also SQL until now, the learning guide me to the wonderful of developer world and look exciting when learning about coding that why i am here.",
      age: 24,
      height: 174,
      weight: 67,
      hometown: "Phayao",
      living: "Chiang Mai"
    }
  }

  getEducation() {
    return [
      {
        id: 1,
        name: "Phayaopittayakhom School",
        year: "2013 - 2015",
        program: "Science Mathematics and Information technology program"
      },
      {
        id: 2,
        name: "Chiang Mai University",
        year: "2016 - 2019",
        program: "Bachelor of Economics degree (International Program)"
      }
    ]
  }

  getExperience() {
    return [
      { 
        id: 1,
        name: "University Activities",
        detail: "Traffic staff in CMU trekking for faculty of economics and Head of the Economics Football club"
      },
      {
        id: 2,
        name: "Trinee as a Course creator at Like Me Co.,Ltd. 2019",
        detail: "Develop courses about stock, fund, and tax. Coordinate with the lecturer, designer, and leader to produce online courses about stock, fund, and tax that suitable for the group target. Design a course outline in PowerPoint for more clearly and easy to understand.",
      },
      {
        id: 3,
        name: "System Analyst at Mazmaker Co.,Ltd. 2021",
        detail: "Informed and analysis a business requirement from clients then measure how possible and function of the system. Designed and planned system that can deserve to reduce pain point or develop the business for clients. Created the proposal for offer the solution of our team to clients business. Coordinate within team itself, other team and also clients to generate the work flow. Created function requirement and UX/UI for clients."
      }
    ]
  }

  getSkill() {
    return [
      {
        id: 1,
        name: "Soft Skill",
        skill: [
          {
            id: 1,
            name: "Team Player",
            skills: ["Support the Team, know yourself limit and don't be a hindrance of the team. also thinking the big picture for the impact of any action"]
          },
          {
            id: 2,
            name: "Project Management",
            skills: ["Especial known the process of work, how fast we can solve our tasks, also fast for other teams who are waiting continue to do the job after our team."]
          },
          {
            id: 3,
            name: "Willingness to Learn",
            skills:["The technology is keeping updating day by day, which impact humen to learn the new thing more and more for keeping trends and skills, and i am the one of these humen"]
          }
        ]
      },
      {
        id: 2,
        name: "Hard Skills",
        skill: [
          {
            id: 1,
            name: "Computer skills",
            skills: ["Python", "SQL", "Tableau", "HTML", "CSS", "Office tools", "Google tools", "iWork", "JavaScript"]
          },
          {
            id: 2,
            name: "language",
            skills: ["Thai", "English"]
          }
        ]
      }
    ]
  }

  getLifeLong() {
    return {
        description: "I also have a life long learning skill, after I graduated from Chiang Mai university I have been improving data analysis and visualization skill via online courses from many sources. Below is some of my certificates."
      }

  }


  getContact() {
    return {
        address: "Chiang Mai",
        phone: "+66848051238",
        facebook: "Basbus BasBus",
        linkedin: "Sarawut Kengkan",
        github: "Sarawut",
        email: "bussarawut@icloud.com"
      }
      
  }
}
