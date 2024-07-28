import matplotlib.pyplot as plt
import re


def removeSuffixs(text):
    words = text.split(' ')
    suffixList = ["ed", "ly", "ing"]
    output_list = []
    for word in words:
        final_word = word
        for suffix in suffixList:
            if suffix in word:
                final_word = word.replace(suffix, '')
            if word[-1] == 's':
                final_word = word[:-1]
        output_list.append(final_word)
    return ' '.join(output_list)


def plot_graph(rank, frequency):
    #Plot the rank and frequency
    plt.plot(rank,frequency)

    # Labelling the x axis
    plt.xlabel('Rank(r)')
    # Labelling the y axis
    plt.ylabel('Frequency(f)')

    # Providing a title to the graph
    plt.title("Zipf's law")

    plt.show()




def main():
    text = ''' My dogs love music a lot and often listen to the Rolling Stones 
               Information Retrieval course 
               The dog can roll He loves rolling and throwing stones 
               They also often help me pick up stones from the road '''
    
    stopWords = ['a', 'also', 'and', 'are', 'from', 'he', 'how', 'lot', 'me', 'my', 'of', 'often', 'some', 'the', 'they', 'to', 'very']

    #Convert text to lower case
    text = text.lower()
    # Remove stop words
    text = ' '.join([word for word in text.split() if word not in stopWords])
    # Remove ly, ed, ing, s
    text = removeSuffixs(text)
    print(text)
    #Remove the unwanted characters
    textList = re.split(', | |\. ', text)
    textDict = {}
    wordFrequency={}

    #Find the frequency of words
    for txt in textList:
        if txt in textDict.keys():
            textDict[txt]+=1
        else:
            textDict[txt]=1

    #Sort the word frequencies in descending order
    wordFrequency = dict(
            sorted(
                textDict.items(),
                key=lambda x: x[1],
                reverse=True)
            )

    print(wordFrequency)

    #Define two lists, rank and frequency
    rank = []
    frequency = []
    init = 0

    #Assign ranks based on frequencies of words
    for freq in wordFrequency.values():
        init+=1
        rank.append(init)
        frequency.append(freq)

    plot_graph(rank, frequency)
    


main()