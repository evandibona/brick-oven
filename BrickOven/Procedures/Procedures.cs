using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using BrickOven.Models; 

namespace BrickOven.Procedures
{
    public static class SP
    {
        private static string cxSTring = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString; 
        public static List<string> Execute(string sp)
        {
            var r = new List<string>(); 
            using (var cx = new SqlConnection(cxSTring)) 
            {
                using (var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure })
                {
                    cx.Open();
                    var rdr = command.ExecuteReader(); 
                    while (rdr.Read())
                    {
                        r.Add(rdr[0].ToString());
                    }
                }
            }
            return r; 
        }
    }
}