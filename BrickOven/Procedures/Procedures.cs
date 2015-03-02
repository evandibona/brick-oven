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
    public static class SP
    {
        public static string cxSTring = ConfigurationManager.ConnectionStrings[0].ToString();
        public static string Execute(string sp)
        {
            var r = new DataSet();
            using (var cx = new SqlConnection("Server=LUCE\\SQLSERVER;Database=HCL2;Integrated Security=True"))
            {
                using (var command = new SqlCommand(sp, cx) { CommandType = CommandType.StoredProcedure })
                {
                    cx.Open(); 
                    var rdr = command.ExecuteReader();
                    while (rdr.Read())
                    {
                        var a = rdr[0]; 
                    }
                }
            }
            return r.ToString();
        }
    }
}