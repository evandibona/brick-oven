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
        [HttpPost]
        public Dictionary<string,string> Post(Dictionary<string,string> data)
        {
            var a = Cars.Car("2000"); 
            switch ("")
            {
                case "years":
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