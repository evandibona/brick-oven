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
    public static class Cars
    {
        private static string cxSTring = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString; 
        /// <summary>
        /// Takes a SQL row id and returns a dictionary for the corresponding car. 
        /// </summary>
        /// <param name="id"></param>
        /// <returns>A Dictionary object corresponding to the car returned. </returns>
        public static Dictionary<string,string> Car(string id)
        {
            var sp = "dbo.GetById"; 
            var r = new Dictionary<string,string>(); 
            using (var cx = new SqlConnection(cxSTring)) 
            {
                var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure }; 
                command.Parameters.Add(new SqlParameter("@Id", id)); 
                using (command)
                {
                    cx.Open();
                    var rdr = command.ExecuteReader(); 
                    while (rdr.Read())
                    {
                    }
                }
            }
            return r; 
        }
    }
    public static class StringStuffings
    {
        public static bool Empty(this string s )
        {
            if (s.Length > 0)
            {
                return false; 
            }
                return true; 
        }
    }
}