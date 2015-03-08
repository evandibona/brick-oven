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
            return Cars.UniquesByProperty(id).ToArray();
        }
    }
}