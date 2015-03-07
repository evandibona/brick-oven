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
            var data = new string[] { "Move along, nothing to see here." }; 
            switch (label)
            {
                case "years":
                    data = Cars.UniquesByProperty("model_year").ToArray(); 
                    break; 
                case "makes":
                    data = Cars.UniquesByProperty("make").ToArray(); 
                    break; 
                default:
                    break;
            }
            return data; 
        }
    }
}