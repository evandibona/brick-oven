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
        public static Dictionary<string, string> Car(string id)
        {
            var sp = "dbo.GetCarById";
            var r = new Dictionary<string, string>();
            using (var cx = new SqlConnection(cxSTring))
            {
                var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure };
                command.Parameters.Add(new SqlParameter("@id", id));
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
            return SpToList("dbo.eGetProperty", ps);
        }
        public static List<Dictionary<string,string>> CarList(string max, Dictionary<string, string> filter)
        {
            string whereClause = "WHERE ";
            var lst = new List<string>();
            foreach (var item in filter)
            {
                lst.Add(item.Key + "=" + "'" + item.Value + "'");
            }
            whereClause += string.Join(" AND ", lst);

            var pts = new Dictionary<string, string>() {
                {"@max", max }, 
                {"@conditions", whereClause } 
            };
            var colNames = SpToList("dbo.eGetColumns", new Dictionary<string, string>()); 
            var rows = SpRows("dbo.eGetCars", pts);
            var outData = new List<Dictionary<string, string>>(); 
            foreach (var row in rows)
            {
                var count = colNames.Count - 2;
                var rowDict = new Dictionary<string, string>(); 
                for (int i = 0; i < count; i++)
                {
                    rowDict.Add(colNames[i], row[i]); 
                }
                outData.Add(rowDict); 
            }
            return outData;
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
        private static List<List<string>> SpRows(string sp, Dictionary<string, string> ps)
        {
            var li = new List<List<string>>();
            if (sp.Length > 0)
            {
                using (var cx = new SqlConnection(cxSTring))
                {
                    var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure };
                    foreach (var pair in ps)
                    {
                        var key = pair.Key.ToString();
                        var val = pair.Value.ToString();
                        command.Parameters.Add(new SqlParameter(key, val));
                    }
                    using (command)
                    {
                        cx.Open();
                        var rdr = command.ExecuteReader();
                        var q = rdr.Read();
                        while (rdr.Read())
                        {
                            var row = new List<string>(); 
                            var len = rdr.FieldCount - 1;
                            for (int i = 0; i < len; i++)
                            {
                                row.Add(rdr[i].ToString()); 
                            }
                            li.Add(row); 
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