using System;
using System.Collections.Generic;
using System.Linq;
using System.Net; 
using System.Net.Http;
using System.Web.Http;
using BrickOven.Procedures; 

namespace BrickOven.Controllers
{
    public class FinderController : ApiController
    {
        // POST: api/finder
        public string[] Get(string id)
        {
            var label = id; 
            var a = new string[] { "Move along, nothing to see here." }; 
            switch (label)
            {
                case "years":
                    a = Cars.UniquesByProperty("model_year").ToArray(); 
                    break; 
                case "makes":
                    break; 
                default:
                    break;
            }
            return a; 
        }
    }
}