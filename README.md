# 📊 Machine Learning para Inadimplentes Financeiros

## 💡 Objetivo

Desenvolver um sistema preditivo inteligente capaz de *identificar o perfil de novos clientes* e estimar a probabilidade de *inadimplência financeira nos próximos 12 meses*. Com isso, a área de crédito pode tomar decisões mais assertivas e minimizar riscos.

---

## 🧠 Abordagem de Machine Learning

Utilizamos técnicas supervisionadas de *classificação binária*, com foco em dois modelos principais:

### 🔍 Modelos Aplicados
- *Regressão Logística (Logistic Regression)* com Feature Engineering
- *Árvore de Decisão (Decision Tree Classifier)*

### 🛠 Feature Engineering
Aplicamos transformações nos dados para aumentar a capacidade de previsão dos modelos:
- Imputação de valores nulos
- Padronização de variáveis numéricas (StandardScaler)
- Codificação de variáveis categóricas (OneHotEncoder)

### 📈 Métricas Avaliadas
Para comparação e escolha do melhor modelo, usamos:
- *Acurácia*
- *Matriz de Confusão*
- *Gini*
- *KS (Kolmogorov-Smirnov)*
- *Lift*

### 📈 Métricas Avaliadas na Arvore de Decisão:
Acurácia: 85%
Gini: 81%
KS: 81%

---

## 🧪 Treinamento do Modelo

Utilizamos a biblioteca scikit-learn para treinar os modelos. O pipeline completo com Feature Engineering + Logistic Regression foi implementado com as etapas:

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer

##  Tecnologias Utilizadas

Apache Spark	Processamento e ETL de grandes volumes de dados
scikit-learn	Treinamento e avaliação dos modelos preditivos
Power BI	Visualização de dados descritivos e indicadores preditivos
Python	Linguagem principal para manipulação de dados e modelagem
