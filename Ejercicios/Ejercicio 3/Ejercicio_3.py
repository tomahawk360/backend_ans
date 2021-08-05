#Importacion
from time import time

#Cadena de string a procesar
str = 'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood'

#Funcion comprobar si es palindromo
def isPalindrome(str):
    r = []
    for a in range(0, len(str)):
        r.append(str[a:a+1])
    r1 = r.copy()
    r.reverse()
    if ''.join(r) == ''.join(r1):
        return True
    else:
        return False

#Encuentra las cadenas palindromo dentro del string str
res = []
for i in range(0, len(str)):
    for j in range(i+1, len(str)+2):
        k = str[i:j]
        if len(k) == 1 or isPalindrome(k):
            res.append(k)

#Entrega las cadenas palindromo
print(res)