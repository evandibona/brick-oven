﻿using System;
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
        public static Dictionary<string, string> Car(string id)
        {
            var sp = "dbo.GetById";
            var r = new Dictionary<string, string>();
            using (var cx = new SqlConnection(cxSTring))
            {
                var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure };
                command.Parameters.Add(new SqlParameter("@myId", id));
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
        public static List<string> UniquesByProperty(string prop)
        {
            var ps = new Dictionary<string, string> {
                {"@property", prop}
            };
            return SpToList("dbo.GetProperty", ps);
        }
        private static List<string> SpToList(string sp, Dictionary<string, string> ps)
        {
            var li = new List<string>();
            if (sp.Length > 0)
            {
                using (var cx = new SqlConnection(cxSTring))
                {
                    var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure };
                    foreach (var pair in ps)
                    {
                        //command.Parameters.Add(new SqlParameter(param.Keys.ToList()[0], param.Values.ToList()[0]));
                        var key = pair.Key.ToString(); 
                        var val = pair.Value.ToString();
                        command.Parameters.Add(new SqlParameter(key, val)); 
                    }
                    using (command)
                    {
                        cx.Open();
                        var rdr = command.ExecuteReader();
                        while (rdr.Read())
                        {
                            li.Add(rdr[0].ToString()); 
                        }
                    }
                }
            }
            return li;
        }
    }
    public static class StringStuffings
    {
        public static bool Empty(this string s)
        {
            if (s.Length > 0)
            {
                return false;
            }
            return true;
        }
    }
}