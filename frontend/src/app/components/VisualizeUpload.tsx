"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudUpload, FileCheck2, FlaskConical, Brain, BarChart2, ScrollText, Sparkles, Filter ,} from "lucide-react";
import Bubbles from "./Bubbles"; // Import your existing Bubbles component

export default function VisualizeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const [ripples, setRipples] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setUploaded(true);
      triggerRippleWave();
    }
  };

  const triggerRippleWave = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setRipples((prev) => [...prev, Date.now() + i]);
      }, i * 300);
    }
  };

  const handleOptionClick = (option: string) => {
    setLoading(true);
    setSelectedOption(null);
    triggerRippleWave();
    setTimeout(() => {
      setSelectedOption(option);
      setLoading(false);
    }, 1500);
  };

  
  const renderContent = () => {
    switch (selectedOption) {
        case "Analyze":
            return (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blue-100">Dataset Analysis</h3>
          
                {/* Overview */}
                <div className="bg-white/10 p-5 rounded-lg border border-white/20 text-sm text-white space-y-2">
                  <p className="font-semibold text-blue-200">Data Overview:</p>
                  <p><span className="text-blue-100">Rows:</span> 100</p>
                  <p><span className="text-blue-100">Columns:</span> 12</p>
                  <p><span className="text-blue-100">Memory Usage:</span> 9.5+ KB</p>
                  <p><span className="text-blue-100">Dtypes:</span> int64(1), object(11)</p>
                </div>
          
                {/* First 5 Rows */}
                <div className="bg-white/10 p-5 rounded-lg border border-white/20 overflow-auto">
                  <p className="font-semibold text-blue-200 mb-3">First 5 Rows:</p>
                  <table className="text-white text-sm min-w-[600px] w-full border-collapse">
                    <thead>
                      <tr className="bg-white/10">
                        <th className="p-2">Index</th>
                        <th className="p-2">Customer Id</th>
                        <th className="p-2">First Name</th>
                        <th className="p-2">Last Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Subscription Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-white/5 transition">
                        <td className="p-2">1</td>
                        <td className="p-2">DD37Cf93aecA6Dc</td>
                        <td className="p-2">Sheryl</td>
                        <td className="p-2">Zuniga</td>
                        <td className="p-2">zunigavanessa@smith.info</td>
                        <td className="p-2">2020-08-24</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition">
                        <td className="p-2">2</td>
                        <td className="p-2">1Ef7b82A4CAAD10</td>
                        <td className="p-2">Preston</td>
                        <td className="p-2">Mata</td>
                        <td className="p-2">vmata@colon.com</td>
                        <td className="p-2">2021-04-23</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition">
                        <td className="p-2">3</td>
                        <td className="p-2">6F94879bDAfE5a6</td>
                        <td className="p-2">Roy</td>
                        <td className="p-2">Carr</td>
                        <td className="p-2">beckycarr@hogan.com</td>
                        <td className="p-2">2020-03-25</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition">
                        <td className="p-2">4</td>
                        <td className="p-2">5Cef8BFA16c5e3c</td>
                        <td className="p-2">Linda</td>
                        <td className="p-2">Blackwell</td>
                        <td className="p-2">stanleyblackwell@benson.org</td>
                        <td className="p-2">2020-06-02</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition">
                        <td className="p-2">5</td>
                        <td className="p-2">053d585Ab6b3159</td>
                        <td className="p-2">Joanna</td>
                        <td className="p-2">Alvarado</td>
                        <td className="p-2">colinalvarado@miles.net</td>
                        <td className="p-2">2021-04-17</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          
                {/* Nulls + Cols + Correlation */}
                <div className="bg-white/10 p-5 rounded-lg border border-white/20 space-y-2 text-white text-sm">
                  <p><span className="font-semibold text-blue-200">Missing Values:</span> No missing values 🎉</p>
                  <p><span className="font-semibold text-blue-200">Numeric Columns:</span> ['Index']</p>
                  <p><span className="font-semibold text-blue-200">Correlation Matrix:</span></p>
                  <div className="bg-white/5 rounded p-2 w-fit">
                    <p className="text-blue-100">Index - 1.0</p>
                  </div>
                </div>
              </div>
            );
          
        case "Recommend":
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-100">Recommended Charts</h3>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 space-y-3 text-white">
                  <p><span className="font-semibold">Index:</span> Histogram, Line Chart, Box Plot</p>
                  <p><span className="font-semibold">Customer Id:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">First Name:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Last Name:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Company:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">City:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Country:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Phone 1:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Phone 2:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Email:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Subscription Date:</span> Bar Chart, Pie Chart</p>
                  <p><span className="font-semibold">Website:</span> Bar Chart, Pie Chart</p>
                </div>
              </div>
            );
          
        case "Visualize":
                return (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-100">Visualization</h3>
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="h-auto flex items-center justify-center bg-white/5 rounded border border-white/10 p-2">
                        <img
                          src="/images/Visualize_customer_linechart.jpeg"
                          alt="Line Chart Visualization"
                          className="max-h-80 rounded-md"
                        />
                      </div>
                      <div className="mt-3 flex justify-center gap-3">
                        <button className="px-3 py-1 bg-blue-500/30 rounded-md text-xs hover:bg-blue-500/50 transition">Bar Chart</button>
                        <button className="px-3 py-1 bg-blue-500/50 rounded-md text-xs transition">Line Chart</button>
                        <button className="px-3 py-1 bg-blue-500/30 rounded-md text-xs hover:bg-blue-500/50 transition">Scatter Plot</button>
                      </div>
                    </div>
                  </div>
                );
              
        case "Insights":
            return (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-100">Key Insights</h3>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-white space-y-4">
                  <p>
                    This file has <span className="font-semibold">100 rows</span> (like entries or records) and <span className="font-semibold">12 columns</span> (these are the different things being tracked).
                    Some columns have numbers like <span className="italic">Index</span>. These might show amounts, prices, or counts.
                    There are also columns with words like <span className="italic">Customer Id, First Name, Last Name</span> and more.
                    These could be names, types, or labels. One or more columns look like dates, so the data probably changes over time.
                    A simple <span className="italic">line chart</span> could help you understand it better.
                  </p>
          
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-blue-200 mb-2">Sample Data</h4>
                    <div className="text-xs space-y-2">
                      <div className="bg-white/10 p-2 rounded">
                        <pre>{`Index: 1
          Customer Id: DD37Cf93aecA6Dc
          First Name: Sheryl
          Last Name: Baxter
          Company: Rasmussen Group
          City: East Leonard
          Country: Chile
          Phone 1: 229.077.5154
          Phone 2: 397.884.0519x718
          Email: zunigavanessa@smith.info
          Subscription Date: 2020-08-24
          Website: http://www.stephenson.com/`}</pre>
                      </div>
                      <div className="bg-white/10 p-2 rounded">
                        <pre>{`Index: 2
          Customer Id: 1Ef7b82A4CAAD10
          First Name: Preston
          Last Name: Lozano
          Company: Vega-Gentry
          City: East Jimmychester
          Country: Djibouti
          Phone 1: 5153435776
          Phone 2: 686-620-1820x944
          Email: vmata@colon.com
          Subscription Date: 2021-04-23
          Website: http://www.hobbs.com/`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            case "Filter":
                return (
                  <div className="bg-white/10 border border-white/30 backdrop-blur-lg rounded-2xl p-6 text-white shadow-lg w-full max-w-6xl mx-auto mt-10 space-y-6">
                    <div className="text-lg font-semibold border-b border-white/30 pb-2">
                      <span className="text-blue-100">Action:</span> filter
                    </div>
                    <div className="text-sm">
                      <span className="text-blue-100">Args:</span> ['test.py', 'filter', 'customer.csv', 'Email']
                    </div>
              
                    <div className="overflow-x-auto">
                      <table className="w-full border-separate border-spacing-0 text-sm text-left text-white">
                        <thead className="bg-white/20 text-blue-200">
                          <tr>
                            <th className="p-3">Index</th>
                            <th className="p-3">Customer Id</th>
                            <th className="p-3">First Name</th>
                            <th className="p-3">Phone 2</th>
                            <th className="p-3">Subscription Date</th>
                            <th className="p-3">Website</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white/10 backdrop-blur-sm">
                          {[
                            {
                              index: 1,
                              id: "DD37Cf93aecA6Dc",
                              name: "Sheryl",
                              phone: "397.884.0519x718",
                              date: "2020-08-24",
                              site: "http://www.stephenson.com/",
                            },
                            {
                              index: 2,
                              id: "1Ef7b82A4CAAD10",
                              name: "Preston",
                              phone: "686-620-1820x944",
                              date: "2021-04-23",
                              site: "http://www.hobbs.com/",
                            },
                            {
                              index: 3,
                              id: "6F94879bDAfE5a6",
                              name: "Roy",
                              phone: "(496)978-3969x58947",
                              date: "2020-03-25",
                              site: "http://www.lawrence.com/",
                            },
                            {
                              index: 4,
                              id: "5Cef8BFA16c5e3c",
                              name: "Linda",
                              phone: "+1-813-324-8756",
                              date: "2020-06-02",
                              site: "http://www.good-lyons.com/",
                            },
                            {
                              index: 5,
                              id: "053d585Ab6b3159",
                              name: "Joanna",
                              phone: "001-199-446-3860x3486",
                              date: "2021-04-17",
                              site: "https://goodwin-ingram.com/",
                            },
                          ].map((row) => (
                            <tr
                              key={row.index}
                              className="border-b border-white/20 hover:bg-white/10 transition"
                            >
                              <td className="p-3">{row.index}</td>
                              <td className="p-3">{row.id}</td>
                              <td className="p-3">{row.name}</td>
                              <td className="p-3">{row.phone}</td>
                              <td className="p-3">{row.date}</td>
                              <td className="p-3 underline text-blue-400">
                                <a href={row.site} target="_blank" rel="noopener noreferrer">
                                  {row.site}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              
        case "All":
                return (
                  <div className="text-white space-y-6">
                    <h3 className="text-2xl font-semibold text-blue-100">Dataset Analysis</h3>
              
                    <div className="bg-white/10 p-5 rounded-lg border border-white/20 text-sm space-y-2">
                      <p className="font-semibold text-blue-200">Data Overview:</p>
                      <p><span className="text-blue-100">Rows:</span> 100</p>
                      <p><span className="text-blue-100">Columns:</span> 12</p>
                      <p><span className="text-blue-100">Memory Usage:</span> 9.5+ KB</p>
                      <p><span className="text-blue-100">Dtypes:</span> int64(1), object(11)</p>
                    </div>
              
                    <div className="bg-white/10 p-5 rounded-lg border border-white/20 overflow-auto text-sm">
                      <p className="font-semibold text-blue-200 mb-3">First 5 Rows:</p>
                      <table className="min-w-[600px] w-full border-collapse">
                        <thead>
                          <tr className="bg-white/10">
                            {["Index", "Customer Id", "First Name", "Last Name", "Email", "Subscription Date"].map((head, i) => (
                              <th key={i} className="p-2">{head}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["1", "DD37Cf93aecA6Dc", "Sheryl", "Zuniga", "zunigavanessa@smith.info", "2020-08-24"],
                            ["2", "1Ef7b82A4CAAD10", "Preston", "Mata", "vmata@colon.com", "2021-04-23"],
                            ["3", "6F94879bDAfE5a6", "Roy", "Carr", "beckycarr@hogan.com", "2020-03-25"],
                            ["4", "5Cef8BFA16c5e3c", "Linda", "Blackwell", "stanleyblackwell@benson.org", "2020-06-02"],
                            ["5", "053d585Ab6b3159", "Joanna", "Alvarado", "colinalvarado@miles.net", "2021-04-17"]
                          ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition">
                              {row.map((cell, i) => <td key={i} className="p-2">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
              
                    <div className="bg-white/10 p-5 rounded-lg border border-white/20 text-sm space-y-2">
                      <p><span className="font-semibold text-blue-200">Missing Values:</span> No missing values 🎉</p>
                      <p><span className="font-semibold text-blue-200">Numeric Columns:</span> ['Index']</p>
                      <p><span className="font-semibold text-blue-200">Correlation Matrix:</span></p>
                      <div className="bg-white/5 rounded p-2 w-fit">
                        <p className="text-blue-100">Index - 1.0</p>
                      </div>
                    </div>
              
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-100">Recommended Charts</h3>
                      <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-sm space-y-1">
                        {["Index", "Customer Id", "First Name", "Last Name", "Company", "City", "Country", "Phone 1", "Phone 2", "Email", "Subscription Date", "Website"].map((col, i) => (
                          <p key={i}><span className="font-semibold">{col}:</span> Bar Chart, Pie Chart</p>
                        ))}
                      </div>
                    </div>
              
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-100">Visualization</h3>
                      <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                        <div className="h-auto flex justify-center bg-white/5 rounded border border-white/10 p-2">
                          <img
                            src="/images/Visualize_customer_linechart.jpeg"
                            alt="Line Chart Visualization"
                            className="max-h-80 rounded-md"
                          />
                        </div>
                        <div className="mt-3 flex justify-center gap-3">
                          {["Bar Chart", "Line Chart", "Scatter Plot"].map((label, i) => (
                            <button
                              key={i}
                              className={`px-3 py-1 text-xs rounded-md transition ${label === "Line Chart" ? "bg-blue-500/50" : "bg-blue-500/30 hover:bg-blue-500/50"}`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
              
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-blue-100">Key Insights</h3>
                      <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-sm space-y-4">
                        <p>
                          This file has <span className="font-semibold">100 rows</span> and <span className="font-semibold">12 columns</span>.
                          Some have numbers (like <span className="italic">Index</span>) and some have text
                          (like <span className="italic">Customer Id, First Name</span> etc.). At least one column looks like a date.
                          Try using a <span className="italic">line chart</span> to understand trends over time.
                        </p>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs space-y-2">
                          {[
                            `Index: 1\nCustomer Id: DD37Cf93aecA6Dc\nFirst Name: Sheryl\nLast Name: Baxter\nCompany: Rasmussen Group\nCity: East Leonard\nCountry: Chile\nPhone 1: 229.077.5154\nPhone 2: 397.884.0519x718\nEmail: zunigavanessa@smith.info\nSubscription Date: 2020-08-24\nWebsite: http://www.stephenson.com/`,
                            `Index: 2\nCustomer Id: 1Ef7b82A4CAAD10\nFirst Name: Preston\nLast Name: Lozano\nCompany: Vega-Gentry\nCity: East Jimmychester\nCountry: Djibouti\nPhone 1: 5153435776\nPhone 2: 686-620-1820x944\nEmail: vmata@colon.com\nSubscription Date: 2021-04-23\nWebsite: http://www.hobbs.com/`
                          ].map((sample, i) => (
                            <div key={i} className="bg-white/10 p-2 rounded whitespace-pre-wrap">{sample}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 border border-white/30 backdrop-blur-lg rounded-2xl p-6 text-white shadow-lg w-full max-w-6xl mx-auto mt-10 space-y-6">
                    <div className="text-lg font-semibold border-b border-white/30 pb-2">
                      <span className="text-blue-100">Action:</span> filter
                    </div>
                    <div className="text-sm">
                      <span className="text-blue-100">Args:</span> ['test.py', 'filter', 'customer.csv', 'Email']
                    </div>
              
                    <div className="overflow-x-auto">
                      <table className="w-full border-separate border-spacing-0 text-sm text-left text-white">
                        <thead className="bg-white/20 text-blue-200">
                          <tr>
                            <th className="p-3">Index</th>
                            <th className="p-3">Customer Id</th>
                            <th className="p-3">First Name</th>
                            <th className="p-3">Phone 2</th>
                            <th className="p-3">Subscription Date</th>
                            <th className="p-3">Website</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white/10 backdrop-blur-sm">
                          {[
                            {
                              index: 1,
                              id: "DD37Cf93aecA6Dc",
                              name: "Sheryl",
                              phone: "397.884.0519x718",
                              date: "2020-08-24",
                              site: "http://www.stephenson.com/",
                            },
                            {
                              index: 2,
                              id: "1Ef7b82A4CAAD10",
                              name: "Preston",
                              phone: "686-620-1820x944",
                              date: "2021-04-23",
                              site: "http://www.hobbs.com/",
                            },
                            {
                              index: 3,
                              id: "6F94879bDAfE5a6",
                              name: "Roy",
                              phone: "(496)978-3969x58947",
                              date: "2020-03-25",
                              site: "http://www.lawrence.com/",
                            },
                            {
                              index: 4,
                              id: "5Cef8BFA16c5e3c",
                              name: "Linda",
                              phone: "+1-813-324-8756",
                              date: "2020-06-02",
                              site: "http://www.good-lyons.com/",
                            },
                            {
                              index: 5,
                              id: "053d585Ab6b3159",
                              name: "Joanna",
                              phone: "001-199-446-3860x3486",
                              date: "2021-04-17",
                              site: "https://goodwin-ingram.com/",
                            },
                          ].map((row) => (
                            <tr
                              key={row.index}
                              className="border-b border-white/20 hover:bg-white/10 transition"
                            >
                              <td className="p-3">{row.index}</td>
                              <td className="p-3">{row.id}</td>
                              <td className="p-3">{row.name}</td>
                              <td className="p-3">{row.phone}</td>
                              <td className="p-3">{row.date}</td>
                              <td className="p-3 underline text-blue-400">
                                <a href={row.site} target="_blank" rel="noopener noreferrer">
                                  {row.site}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div>
                );
              
              
      default:
        return null;
    }
  };

  return (
<div className="relative bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center bg-fixed bg-no-repeat flex flex-col items-center px-4 overflow-hidden pt-32 pb-32 min-h-screen">
      <Bubbles />
      {/* Ripples Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple}
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="absolute w-60 h-60 rounded-full bg-white/30"
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-6"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold">DataOcean</h1>
        </div>
        <p className="text-blue-200 text-lg">Drop your data into the ocean of insights</p>
      </motion.div>

      {/* Upload Box */}
      <motion.label
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative mt-6 z-10 border-4 border-dashed border-white/70 rounded-2xl p-10 w-full max-w-md cursor-pointer text-white flex flex-col items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition shadow-lg shadow-blue-900/50"
      >
        {uploaded ? (
          <>
            <FileCheck2 size={48} className="text-blue-200" />
            <p className="mt-4 font-medium">{file?.name}</p>
            <p className="text-xs mt-2 text-blue-200">File uploaded successfully</p>
          </>
        ) : (
          <>
            <CloudUpload size={48} className="text-blue-200" />
            <p className="mt-4 font-medium">Click or drag a file to upload</p>
            <p className="text-xs mt-2 text-blue-200">Supports CSV, XLSX files</p>
          </>
        )}
        <input
          type="file"
          accept=".csv,.xlsx"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </motion.label>

      {/* Options Section - Using original styling */}
      <AnimatePresence>
  {uploaded && (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="grid grid-cols-2 sm:grid-cols-6 gap-6 mt-16 z-10"
    >
      {[
        { label: "Analyze", icon: <FlaskConical size={32} /> },
        { label: "Recommend", icon: <Brain size={32} /> },
        { label: "Visualize", icon: <BarChart2 size={32} /> },
        { label: "Insights", icon: <ScrollText size={32} /> },
        { label: "Filter", icon: <Filter size={32} /> },
        { label: "All", icon: <Sparkles size={32} /> }, 
      ].map((opt) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={opt.label}
          onClick={() => handleOptionClick(opt.label)}
          className="bg-white/20 border border-white/40 backdrop-blur-md text-white p-4 rounded-xl shadow-lg hover:bg-white/30 transition flex flex-col items-center"
        >
          <div className="mb-2">{opt.icon}</div>
          {opt.label}
        </motion.button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      {/* Result Section */}
      <AnimatePresence>
        {selectedOption && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center max-w-xl z-10 bg-black/30 p-6 rounded-2xl border border-white/30 backdrop-blur shadow-xl"
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-12 text-white z-10 flex flex-col items-center"
        >
          <div className="relative w-16 h-16">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 border-4 border-t-[#063467] border-r-[#166da6] border-b-[#375c85] border-l-transparent rounded-full"
            />
          </div>
          <p className="mt-4 text-blue-100">Diving into your data...</p>
        </motion.div>
      )}
    </div>
    
  );
}