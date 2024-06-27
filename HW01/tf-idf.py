# Import log10
from math import log10
# Import from data idfs values (Figure 6.8) and contents of docs (Figure 6.9)
from data import idfs, doc1, doc2, doc3

## Formulas
# tf(t, d) = count of t in d 
# df(t) = occurrence of t in documents 
# idf(t) = log(N/df(t)) (N - total number of documents)
# tf-idf(t, d) = (1+log10(tf(t, d)) * idf(t)
#####

# Function to calculate tf-idf given term (t) and document (d)
def tf_idf(t,d):
    # If no occurrences return 0
    if d[t] == 0:
        return 0
    # Else
    return (1+log10(d[t])) * idfs[t]

# Main function
def main():
    # Possible terms
    terms = ['car', 'auto', 'insurance', 'best']
    # List of docs
    docs = [doc1, doc2, doc3]
    
    print("Solution: ")
    # Nested for-loop to calculate tf-idf for each term in each doc
    for term in terms:
        for i, doc in enumerate(docs):
            print(f"Weight of {term} in doc{i+1} = (1+log10({doc[term]})) * {idfs[term]} = {tf_idf(term, doc):.4f}")
        print()
# Run main
main()