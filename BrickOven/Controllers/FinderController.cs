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
        public Dictionary<string,string[]> Post(string id)
        {
            var a = SP.Execute("dbo.GetYears"); 
            switch (id)
            {
                case "years":

                default:
                    break;
            }
            var d = new Dictionary<string, string[]>();
            return d; 
        }
    }
}