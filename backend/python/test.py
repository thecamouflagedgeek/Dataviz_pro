import sys
import pandas as pd
import json
import os 
import numpy as np

def analyze(filepath):
    if not os.path.exists(filepath):
        print(json.dumps({"error":"File not found"}))#if the filepath is not traceabel
        return 
    #Loading json
    try:
        if filepath.endswith(".csv"):
            df=pd.read_json(filepath)
        else:
            df=pd.read_csv(filepath)
        #insights
        summary={
            "columns":list(df.columns),
            "shape":df.shape,
            "missing_values":df.isnull().sum().to_dict(),
            "correlations":df.corr().to_dict()
        }
        print(json.dumps(summary))#output -> node.js
    except Exception as e:
        print(json.dumps({"error":str(e)}))

def recommend(filepath):
    if not os.path.exists(filepath):
        print(json.dumps({"error":"File Not Found :x"}))
        return
    try:
        if filepath.endswith(".csv"):
            df=pd.read_csv(filepath)
        else:
            df=pd.read_json(filepath)
        
        #AI Part
        ch_recommend=[]
        for col in df.columns:
            if df[col].dtype=="object":
                ch_recommend.append({"column":col,"chart":"Bar Chart/Pie Chart"})
            elif np.issubdtype(df[col].dtype,np.number):
                ch_recommend.append({"column":col,"chart":"Histogram/Line Chart"})
        print(json.dumps(ch_recommend))
    except Exception as e:
        print(json.dumps({"error":str(e)}))

if __name__ =="__main__":
    if len(sys.argv)<3:
        print(json.dumps({"error":"Missing arguments"}))#not correctly passed arguments
    else:
        action=sys.argv[1]#analyze or recommend
        file_path=sys.argv[2]
        if action=="analyze":
            analyze(file_path)#only analyzes the given csv file
        elif action=="recommend":
            recommend(file_path)#only recommends based on the given csv file
        else:
            print(json.dumps({"error":"Invalid 404!"}))
    