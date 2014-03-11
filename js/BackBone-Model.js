/**
 * Created with JetBrains WebStorm.
 * User: GibbonsS
 * Date: 16/07/13
 * To change this template use File | Settings | File Templates.
*/
src="js/libs/underscore-min.js"
src="http://code.jquery.com/jquery-1.10.1.min.js"
src="js/libs/backbone.js"

var shane = shane || {};
shane.tools = shane.tools || {};
shane.tools.JQSearch = shane.tools.JQSearch  || {};

    /*
      This is the backbone model object. this holds all the relevant content data
      which was in the JSON file. It is wrapped in a backbone.Model.extend
      like the view, only its Model instead of view. This is customary Backbone.
     */

     /*
      shane.tools.JQSearch.searchModel is an object which takes the form of a backbone
      model.
      From this Model extends its contents, which are objects within objects or arrays
      and functions within objects and so on, hence its structure. The JSON file and the
      required objects from the view, which data is written to from the view, are all
      wrapped within the default object and the backbone model.
     */
    shane.tools.JQSearch.searchModel = Backbone.Model.extend({

        defaults : {
            //MODEL
            contentObject : {
                    "response": {
                        "results": {
                            "resultList": [
                                {
                                    "uri": "/resources/2133.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2133",
                                            "resource_type": "Programming 1",
                                            "display_title": "My Adventures in CSS 1",
                                            "language": "en-us",
                                            "meaningful_description": "CSS can be a pain sometimes......",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "html",
                                            "categorization": "UI Development",
                                            "GUID": "NP_G05U06L29D3S62_2133",
                                            "standards": {
                                                "standard": [
                                                    {
                                                        "id": "LACC.5.W.1.2.a",
                                                        "description": "Introduce a CSS topic clearly, provide a general observation and focus, and group related information logically; include formatting, illustrations, and multimedia when useful to aiding comprehension."
                                                    },
                                                    {
                                                        "id": "LACC.5.W.1.2.b",
                                                        "description": "Develop the topic with facts, definitions, concrete details, quotations, or other information and examples related to the topic."
                                                    },
                                                    {
                                                        "id": "LACC.5.W.2.5",
                                                        "description": "With guidance and support from peers, develop and strengthen as needed by planning, revising, editing, rewriting, or trying a new approach."
                                                    }
                                                ]
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "2"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2189.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2189",
                                            "resource_type": "Programming 2",
                                            "display_title": "My Adventures in JavaScript 1",
                                            "language": "en-us",
                                            "meaningful_description": "It's more than just jQuery you know.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "Core Components",
                                            "GUID": "NP_G05U02L10D4S21_2189",
                                            "standards": {
                                                "standard": {
                                                    "id": "LACC.5.RL.4.10",
                                                    "description": "By the end of the year, read and comprehend JavaScript, including closures, delegates, and jQuery widgets."
                                                }
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/1284.xml",
                                    "content": {
                                        "resource": {
                                            "id": "1284",
                                            "resource_type": "Programming 3",
                                            "display_title": "HTML and CSS3 2",
                                            "language": "en-us",
                                            "meaningful_description": "Programming in HTML and CSS3 and the intricacies of browser support for the new fangled stuff.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "UI Development",
                                            "GUID": "NP_G04U04L17D5S59_1284",
                                            "standards": {
                                                "standard": {
                                                    "id": "LACC.4.L.1.2.d",
                                                    "description": "Make use of the canvas view and rounded corners."
                                                }
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2166.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2166",
                                            "resource_type": "Agile 1",
                                            "display_title": "Agile Development 1",
                                            "language": "en-us",
                                            "meaningful_description": "A look at why most companies can't even spell Agile and it's just waterfall dressed up. Thankfully we're not one of them.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "Software Development",
                                            "GUID": "NP_G02U01L05D3S00_2166",
                                            "resource_type_id": "2",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2419.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2419",
                                            "resource_type": "Tools 5",
                                            "display_title": "Resharper 5",
                                            "language": "en-us",
                                            "meaningful_description": "Friends don't let friends use Visual Studio without it.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "false",
                                            "media_type": "pdf",
                                            "categorization": "Software Development",
                                            "GUID": "NP_G03U01L01D0S00_2419",
                                            "resource_type_id": "3",
                                            "media_type_id": "4"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/1401.xml",
                                    "content": {
                                        "resource": {
                                            "id": "1401",
                                            "resource_type": "Agile 2",
                                            "display_title": "Scrum 1",
                                            "language": "en-us",
                                            "meaningful_description": "Scrum is an iterative and incremental agile software development framework for managing software projects and product or application development. Scrum has not only reinforced the interest in project management,but also challenged the conventional ideas about such management. Scrum focuses on project management institutions where it is difficult to plan ahead. Mechanisms of empirical process control, where feedback loops that constitute the core management technique are used as opposed to traditional command-and-control oriented management.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "Software Development",
                                            "GUID": "NP_G05U04L19D1S20_1401",
                                            "standards": {
                                                "standard": [
                                                    {
                                                        "id": "LACC.5.L.2.3.b",
                                                        "description": "Compare and contrast the varieties of processes used within Scrum."
                                                    },
                                                    {
                                                        "id": "LACC.5.RL.1.2",
                                                        "description": "Determine how best to use Scrum in a multi timezone team."
                                                    },
                                                    {
                                                        "id": "LACC.5.RL.4.10",
                                                        "description": "Describe what definition of done is."
                                                    },
                                                    {
                                                        "id": "SS.5.C.2.4",
                                                        "description": "Describe common waterfall smells in teams implementing agile."
                                                    }
                                                ]
                                            },
                                            "resource_type_id": "2",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2222.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2222",
                                            "resource_type": "Agile 3",
                                            "display_title": "Test Driven Development 3",
                                            "language": "en-us",
                                            "meaningful_description": "The most efficient way to develop but sticking to it as a development team can be hard sometimes.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "false",
                                            "media_type": "pdf",
                                            "categorization": "Software Development",
                                            "GUID": "NP_G02U06L28D1S00_2222",
                                            "resource_type_id": "2",
                                            "media_type_id": "4"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/1134.xml",
                                    "content": {
                                        "resource": {
                                            "id": "1134",
                                            "resource_type": "Programming 4",
                                            "display_title": "dotNet Web Api 1",
                                            "language": "en-us",
                                            "meaningful_description": "A massive improvement on how Microsoft supports REST. Still room for improvement but they are going in the right direction.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "false",
                                            "media_type": "flash",
                                            "categorization": "Backend Development",
                                            "GUID": "NP_G01U03L11D1S56_1134",
                                            "standards": {
                                                "standard": [
                                                    {
                                                        "id": "LACC.1.RF.2.2.b",
                                                        "description": "Demonstrate Knowledge of the dotNET Web Api"
                                                    },
                                                    {
                                                        "id": "LACC.1.SL.1.1.b",
                                                        "description": "Build on others’ talk in conversations by responding to the comments of others through multiple exchanges."
                                                    }
                                                ]
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2552.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2552",
                                            "resource_type": "Programming 5",
                                            "display_title": "Backbone 3",
                                            "language": "en-us",
                                            "meaningful_description": "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface. The project is hosted on GitHub, and the annotated source code is available, as well as an online test suite, an example application, a list of tutorials and a long list of real-world projects that use Backbone. Backbone is available for use under the MIT software license. You can report bugs and discuss features on the GitHub issues page, on Freenode IRC in the #documentcloud channel, post questions to the Google Group, add pages to the wiki or send tweets to @documentcloud. Backbone is an open-source component of DocumentCloud.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "UI Development",
                                            "GUID": "NP_G04U02L08D2S59_2552",
                                            "standards": {
                                                "standard": [
                                                    {
                                                        "id": "LACC.1.RF.2.2.b",
                                                        "description": "Demonstate abilities of backbone to manage your view model"
                                                    },
                                                    {
                                                        "id": "LACC.1.SL.1.1.b",
                                                        "description": "Demonstate knowledge of underscore."
                                                    }
                                                ]
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "1"
                                        }
                                    }
                                },
                                {
                                    "uri": "/resources/2187.xml",
                                    "content": {
                                        "resource": {
                                            "id": "2187",
                                            "resource_type": "Programming 6",
                                            "display_title": "Twitter Bootstrap 2",
                                            "language": "en-us",
                                            "meaningful_description": "Built at Twitter by @mdo and @fat, Bootstrap utilizes LESS CSS3, is compiled via Node, and is managed through GitHub to help nerds do awesome stuff on the web. Bootstrap was made to not only look and behave great in the latest desktop browsers (as well as IE7), but in tablet and smartphone browsers via responsive CSS as well. A 12-column responsive grid, dozens of components, JavaScript plugins, typography, form controls, and even a web-based Customizer to make Bootstrap your own.",
                                            "additional_text": "Copyright of Crazy Computing Inc.",
                                            "viewable": "true",
                                            "media_type": "flash",
                                            "categorization": "UI Development",
                                            "GUID": "NP_G03U01L03D1S51_2187",
                                            "standards": {
                                                "standard": {
                                                    "id": "LACC.3.L.3.5.b",
                                                    "description": "Show use of bootstrap on mobile devices."
                                                }
                                            },
                                            "resource_type_id": "1",
                                            "media_type_id": "1"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },

                /*
                 Down here then at the end, our required objects from the view which write data to the model are defined here.
                 Once data is written in the view to one of these in the model, it goes to one of these:

                 e.g. ----->  this.model.set('resultList',resultSet);

                 This is setting all the data in the resultSet array to the object resultList here.
                */

                searchInput : {  },
                resultList : { },
        },

});



