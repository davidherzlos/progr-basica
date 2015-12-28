import math

PI = math.pi

def area(radius):
    theArea = PI * radius ** 2
    
    return theArea
    
    
def main():

    historyOfPrompts = []
    historyOfOutPut = []
    
    def getInput(prompt):
        x = input(prompt)
        historyOfPrompts.append(prompt)
        
        return x
    
    def showOutPut(val):
        historyOfOutPut.append(val)
        print(val)
        
    rString = getInput("Please")
    
    r = float(rString)
    
    val = area(r)
    
    showOutPut("The area...")

if __name__ == "__main__":
    main()
        
        
        