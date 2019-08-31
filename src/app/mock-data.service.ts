import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  mockData = [{
    "title": "Solapur University",
    "date": "07/18/2019",
    "duration": 5266,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "Koshien University",
    "date": "08/25/2019",
    "duration": 1232,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 2
  }, {
    "title": "Sardar Patel University",
    "date": "03/22/2020",
    "duration": 7551,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 2
  }, {
    "title": "Free University Institute \"Carlo Cattaneo\"",
    "date": "08/21/2020",
    "duration": 4658,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "Universidade de Evora",
    "date": "05/11/2019",
    "duration": 5751,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 0
  }, {
    "title": "National Institute of Technology Kurukshetra",
    "date": "01/25/2021",
    "duration": 3774,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "D'Youville College",
    "date": "06/28/2020",
    "duration": 6977,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 0
  }, {
    "title": "Alfaisal University",
    "date": "02/27/2020",
    "duration": 4119,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 5
  }, {
    "title": "Lupane State University",
    "date": "12/24/2020",
    "duration": 9429,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 2
  }, {
    "title": "Newport International University",
    "date": "10/06/2020",
    "duration": 2421,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 2
  }, {
    "title": "Universidad de Los Andes",
    "date": "02/05/2021",
    "duration": 1405,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 2
  }, {
    "title": "National University of Laos",
    "date": "05/11/2019",
    "duration": 3482,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "Universidad del Valle de Toluca",
    "date": "03/02/2020",
    "duration": 5102,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Albany College of Pharmacy",
    "date": "08/19/2019",
    "duration": 9649,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "Ulyanovsk State Agricultural Academy",
    "date": "10/14/2019",
    "duration": 6266,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 1
  }, {
    "title": "Pontifícia Universidade Católica do Rio Grande do Sul",
    "date": "03/14/2020",
    "duration": 9863,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Grace College",
    "date": "03/21/2021",
    "duration": 4608,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 0
  }, {
    "title": "Northern University Bangladesh",
    "date": "11/04/2020",
    "duration": 7443,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 0
  }, {
    "title": "Vietnam Maritime University",
    "date": "08/01/2019",
    "duration": 386,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "Kahramanmaras Sütcü Imam University",
    "date": "01/28/2021",
    "duration": 3961,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 5
  }, {
    "title": "Foreign Trade University",
    "date": "03/17/2020",
    "duration": 8970,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 2
  }, {
    "title": "Jai Narayan Vyas University",
    "date": "10/09/2020",
    "duration": 2868,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Theologische Fakultät Trier",
    "date": "05/06/2019",
    "duration": 4496,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 5
  }, {
    "title": "Odlar Yurdu University",
    "date": "11/19/2019",
    "duration": 7605,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 1
  }, {
    "title": "All India Institute of Medical Sciences",
    "date": "09/24/2020",
    "duration": 900,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 2
  }, {
    "title": "Beijing New Asia University",
    "date": "02/12/2021",
    "duration": 6423,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "University of Asia Pacific, Dhanmondi",
    "date": "08/23/2019",
    "duration": 1602,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "Huazhong University of Science and Technology",
    "date": "08/04/2020",
    "duration": 8398,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 1
  }, {
    "title": "Universitas Katolik Widya Manadala",
    "date": "03/26/2021",
    "duration": 1722,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 4
  }, {
    "title": "National Pingtung Teachers College",
    "date": "02/15/2021",
    "duration": 2133,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "Sevastopol National Technical University",
    "date": "08/28/2020",
    "duration": 178,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "University of Human Development (Kurdistan Region)",
    "date": "12/31/2020",
    "duration": 2380,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "School of Design and Crafts",
    "date": "10/21/2019",
    "duration": 816,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 3
  }, {
    "title": "Emmanuel College",
    "date": "03/23/2021",
    "duration": 1366,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 1
  }, {
    "title": "Universidad de Atacama",
    "date": "12/19/2020",
    "duration": 7372,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Universitas Muhammadiyah Jakarta",
    "date": "02/23/2021",
    "duration": 1265,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Manipal University",
    "date": "08/12/2019",
    "duration": 4761,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Radboud University of Nijmegen",
    "date": "10/17/2020",
    "duration": 4064,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "Tumkur University",
    "date": "11/27/2020",
    "duration": 792,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 3
  }, {
    "title": "Australian National University",
    "date": "09/28/2019",
    "duration": 7829,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 3
  }, {
    "title": "Kisii University",
    "date": "03/26/2021",
    "duration": 6186,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Technological Education Institute of Serres",
    "date": "09/09/2019",
    "duration": 5010,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 0
  }, {
    "title": "Madenat Alelem University College",
    "date": "10/09/2019",
    "duration": 4063,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 3
  }, {
    "title": "Baptist Bible College of Pennsylvania",
    "date": "10/18/2020",
    "duration": 1937,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 4
  }, {
    "title": "Oakland University",
    "date": "02/01/2021",
    "duration": 1840,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 2
  }, {
    "title": "Russian State Medical University",
    "date": "01/01/2021",
    "duration": 6885,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Chia Nana College of Pharmacy and Science",
    "date": "11/18/2020",
    "duration": 4738,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 5
  }, {
    "title": "Yanbu Industrial College",
    "date": "07/09/2019",
    "duration": 3017,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 0
  }, {
    "title": "Husson College",
    "date": "12/20/2019",
    "duration": 6014,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 3
  }, {
    "title": "Abylai Khan University",
    "date": "12/01/2019",
    "duration": 9340,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 2
  }, {
    "title": "Universidad Autónoma Metropolitana - Azcapotzalco",
    "date": "09/02/2020",
    "duration": 1961,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 3
  }, {
    "title": "Russian State Geological Prospecting University ",
    "date": "07/24/2019",
    "duration": 2500,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 4
  }, {
    "title": "Beijing University of Posts and Telecommunications",
    "date": "07/14/2019",
    "duration": 8667,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 0
  }, {
    "title": "Sheridan College",
    "date": "08/23/2019",
    "duration": 9844,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Universidad Tecnológica Metropolitana",
    "date": "12/11/2019",
    "duration": 8807,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 1
  }, {
    "title": "University of Leicester",
    "date": "07/24/2019",
    "duration": 6457,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 5
  }, {
    "title": "Ulyanovsk State Agricultural Academy",
    "date": "09/11/2019",
    "duration": 617,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Ecole Française de Papeterie et des Industries Graphiques",
    "date": "04/24/2021",
    "duration": 4224,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Novosibirsk State Agricultural University",
    "date": "09/03/2020",
    "duration": 4977,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "Gannon University",
    "date": "07/28/2019",
    "duration": 65,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 3
  }, {
    "title": "Ariel University Center of Samaria",
    "date": "12/30/2019",
    "duration": 4696,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 3
  }, {
    "title": "Sullivan College",
    "date": "02/11/2021",
    "duration": 989,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 4
  }, {
    "title": "University of Northumbria at Newcastle",
    "date": "05/15/2019",
    "duration": 9149,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "Dr. YS Parmar University of Horticulture and Forestry",
    "date": "10/08/2019",
    "duration": 9077,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 0
  }, {
    "title": "Kochi Women's University",
    "date": "01/13/2021",
    "duration": 9771,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 4
  }, {
    "title": "Université Abou Bekr Belkaid, Tlemcen",
    "date": "07/22/2020",
    "duration": 7798,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 4
  }, {
    "title": "Knoxville College",
    "date": "10/24/2019",
    "duration": 289,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Kyungsung University",
    "date": "10/25/2019",
    "duration": 7458,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 5
  }, {
    "title": "Isfahan University of Technology",
    "date": "07/22/2019",
    "duration": 3803,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 3
  }, {
    "title": "Babson College",
    "date": "03/04/2021",
    "duration": 6539,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 1
  }, {
    "title": "University of West Alabama",
    "date": "08/14/2020",
    "duration": 526,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 5
  }, {
    "title": "Universidad Nacional de San Agustin",
    "date": "10/13/2020",
    "duration": 964,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Universitas Merdeka Madiun",
    "date": "09/28/2019",
    "duration": 8836,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 0
  }, {
    "title": "Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg",
    "date": "01/10/2020",
    "duration": 9138,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "Aomori Chuoh Gakuin University",
    "date": "04/30/2020",
    "duration": 9520,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 5
  }, {
    "title": "East China Normal University",
    "date": "06/01/2020",
    "duration": 9524,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 4
  }, {
    "title": "Carl von Ossietzky Universität Oldenburg",
    "date": "04/22/2020",
    "duration": 9120,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 4
  }, {
    "title": "Spelman College",
    "date": "05/29/2020",
    "duration": 3755,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "Xi'an Jiaotong University",
    "date": "05/28/2020",
    "duration": 243,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 0
  }, {
    "title": "Universidad de La Rioja",
    "date": "08/20/2020",
    "duration": 7278,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 4
  }, {
    "title": "New England College",
    "date": "05/22/2020",
    "duration": 3273,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 5
  }, {
    "title": "Kogi State University",
    "date": "12/24/2019",
    "duration": 2592,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 1
  }, {
    "title": "Yorker International University",
    "date": "01/25/2021",
    "duration": 7604,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 4
  }, {
    "title": "Fachhochschule Kaiserslautern",
    "date": "09/28/2020",
    "duration": 4182,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 4
  }, {
    "title": "Imo State University",
    "date": "02/03/2021",
    "duration": 7184,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 0
  }, {
    "title": "French Institute of Management",
    "date": "10/09/2020",
    "duration": 1035,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 4
  }, {
    "title": "Nigerian Defence Academy",
    "date": "07/31/2020",
    "duration": 3757,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Université Panthéon-Sorbonne (Paris I)",
    "date": "03/17/2021",
    "duration": 6342,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Cornish College of the Arts",
    "date": "11/01/2020",
    "duration": 9218,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 5
  }, {
    "title": "Wissenschaftliche Hochschule für Unternehmensführung, Otto-Beisheim Hochschule",
    "date": "01/15/2021",
    "duration": 5865,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 1
  }, {
    "title": "Institut d'Etudes Politiques de Paris (Sciences Po)",
    "date": "03/10/2020",
    "duration": 7828,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Brandeis University",
    "date": "07/15/2019",
    "duration": 3312,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/ff4444/ffffff",
    "rating": 0
  }, {
    "title": "Singidunum University",
    "date": "01/02/2021",
    "duration": 8100,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 3
  }, {
    "title": "Textile Institute of Pakistan",
    "date": "11/16/2019",
    "duration": 5777,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 2
  }, {
    "title": "Mersin University",
    "date": "10/24/2019",
    "duration": 4638,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 1
  }, {
    "title": "Texas Woman's University",
    "date": "11/04/2019",
    "duration": 1074,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 1
  }, {
    "title": "Deaconess College of Nursing",
    "date": "05/10/2019",
    "duration": 9537,
    "favorite": true,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 1
  }, {
    "title": "Instituto Superior Minero Metalúrgico \"Dr. Antonio Núñez Jiménez\"",
    "date": "06/25/2019",
    "duration": 4059,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/5fa2dd/ffffff",
    "rating": 5
  }, {
    "title": "Universidad Autónoma de Nuevo León",
    "date": "07/31/2020",
    "duration": 268,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/dddddd/000000",
    "rating": 0
  }, {
    "title": "Universidad Andina Nestor Caceares Velasquez",
    "date": "11/18/2020",
    "duration": 6244,
    "favorite": false,
    "imageUrl": "https://dummyimage.com/75x100.png/cc0000/ffffff",
    "rating": 0
  }];

  getData() {
    return new Observable(subscriber => subscriber.next(this.mockData));
  }
}