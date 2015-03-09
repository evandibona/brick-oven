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
        // GET: api/finder
        public string[] Get(string id)
        {
            return Cars.UniquesByProperty(id).ToArray();
        }
        // POST
        public List<Dictionary<string, string>> Post(Dictionary<string, string> data)
        {
            var maxLength = "20";
            if (data.ContainsKey("max"))
            {
                maxLength = data["max"];
                data.Remove("max");
            }
            return Cars.CarList(maxLength, data);
        }
    }
}