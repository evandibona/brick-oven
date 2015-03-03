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
        public List<string> Post(string id)
        {
            List<string> a = SP.Execute("dbo.GetYears");
            switch (id)
            {
                case "years":
                    a = SP.Execute("dbo.GetYears");
                    break; 
                case "makes":
                    a = SP.Execute("dbo.GetBrands");
                    break; 
                default:
                    break;
            }
            return a; 
        }
    }
}