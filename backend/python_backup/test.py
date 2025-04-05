import sys
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import json
import seaborn as sns
import tensorflow as tf
import tensorflow_hub as hub
import openai
openai.api_key = "REMOVED_SECRETproj-sp4y78QNWZgApoN8e7pGW06_MwyNmKNMOpFcq2eZQWLrco6ubHtzLWJhb01DaOglvlCS4XJU8HT3BlbkFREMOVED_SECRET"

try:
    print("Loading TensorFlow model...")
    embed = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")

def data(filepath):
    """Load data from CSV or JSON file."""
    try:
        if filepath.endswith(".csv"):
            return pd.read_csv(filepath)
        elif filepath.endswith(".json"):
            return pd.read_json(filepath)
        else:
            print(json.dumps({"error": "Unsupported file format"}))
            return None
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        return None

def analyze(file_path):
    df = data(file_path)
    if df is None:
        return

    print("\nData Overview:")
    print(df.info())
    print("\nFirst 5 rows:")
    print(df.head())

    missing_values = df.isnull().sum()
    print("\nMissing Values:")
    print(missing_values[missing_values > 0] if missing_values.sum() > 0 else "No missing values!")

    numeric_df = df.select_dtypes(include=['number'])
    print("\nNumeric Columns:", numeric_df.columns.tolist())

    if not numeric_df.empty:
        correlation_matrix = numeric_df.corr()
        print("\nCorrelation Matrix:\n", correlation_matrix)
        plt.figure(figsize=(8, 6))
        sns.heatmap(correlation_matrix, annot=True, cmap="coolwarm", fmt=".2f")
        plt.title("Correlation Heatmap")
        plt.show()
    else:
        print("\nNo numeric data found. Skipping correlation heatmap.")

def recommend(filepath):
    df = data(filepath)
    if df is None:
        return 

    recommendations = []
    for col in df.columns:
        if df[col].dtype == "object":
            recommendations.append({"column": col, "charts": ["Bar Chart", "Pie Chart"]})
        elif np.issubdtype(df[col].dtype, np.number):
            recommendations.append({"column": col, "charts": ["Histogram", "Line Chart", "Box Plot"]})
    print(json.dumps(recommendations, indent=4))

def visualize(filepath, column, chart_type):
    df = data(filepath)
    if df is None or column not in df.columns:
        print(json.dumps({"error": "Invalid column name"}))
        return

    plt.figure(figsize=(10, 5))
    if chart_type.lower() == "bar chart":
        sns.countplot(x=df[column])
    elif chart_type.lower() == "pie chart":
        df[column].value_counts().plot(kind="pie", autopct='%1.1f%%')
    elif chart_type.lower() == "histogram":
        sns.histplot(df[column], kde=True)
    elif chart_type.lower() == "line chart":
        df[column].plot(kind="line")
    elif chart_type.lower() == "box plot":
        sns.boxplot(y=df[column])
    else:
        print(json.dumps({"error": "Unsupported chart type"}))
        return

    plt.title(f"{chart_type} for {column}")
    plt.show()

def generate_insights(df):
    import json

    num_rows, num_cols = df.shape
    columns = df.columns.tolist()

    numeric_cols = df.select_dtypes(include=['number']).columns.tolist()
    text_cols = df.select_dtypes(include=['object']).columns.tolist()

    insights = []

    insights.append(f"This file has {num_rows} rows (like entries or records) and {num_cols} columns (these are the different things being tracked).")

    if numeric_cols:
        insights.append(f"Some columns have numbers like {', '.join(numeric_cols[:3])}{' and more' if len(numeric_cols) > 3 else ''}. These might show amounts, prices, or counts.")
    
    if text_cols:
        insights.append(f"There are also columns with words like {', '.join(text_cols[:3])}{' and more' if len(text_cols) > 3 else ''}. These could be names, types, or labels.")

    if 'date' in ' '.join(df.columns).lower():
        insights.append("One or more columns look like dates, so the data probably changes over time. A simple line chart could help you understand it better.")
    elif len(numeric_cols) >= 2:
        insights.append("Since there are several number columns, you might want to see how they affect each other using side-by-side comparisons or simple graphs.")
    elif 'name' in ' '.join(df.columns).lower() or 'id' in ' '.join(df.columns).lower():
        insights.append("This data might be about people or things. You could sort or group it to learn more.")
    sample = df.head(2).to_dict(orient='records')
    insights.append(f"Here's a sample of the data: {json.dumps(sample)}")
    summary = {
        "insights": ' '.join(insights),
        "sample_data": sample
    }

    print(json.dumps(summary, indent=4))

def filter_data(filepath, drop_columns):
    df = data(filepath)
    if df is None:
        return

    if drop_columns:
        drop_columns = drop_columns.split(',')
        df = df.drop(columns=[col for col in drop_columns if col in df.columns], errors='ignore')

    print("\nFiltered Data:")
    print(df.head())

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Missing arguments"}))
    else:
        action = sys.argv[1]
        file_path = sys.argv[2]
        print(f"Action: {action}, Args: {sys.argv}")
        if action == "analyze":
            analyze(file_path)
        elif action == "recommend":
            recommend(file_path)
        elif action == "visualize" and len(sys.argv) >= 5:
            column_name = sys.argv[3]
            chart_type = sys.argv[4]
            visualize(file_path, column_name, chart_type)
        elif action == "insights":
            df = data(file_path)
            if df is not None:
                generate_insights(df)
            else:
                print(json.dumps({"error": "Invalid column name"}))
        elif action == "filter" :
            if len(sys.argv) >= 4:
                columns_to_drop = sys.argv[3]
                filter_data(file_path, columns_to_drop)
            else:
                print(json.dumps({"error": "Missing column names for filter actions"}))
        else:
            print(json.dumps({"error": "Invalid command"}))





