# -*- coding: utf-8 -*-
"""
Created on Thu Feb 24 16:24:36 2022

@author: JDIAZ
"""
import os, sys

mujeres = 0
varones = 0
porcentaje_mujeres = 0
porcentaje_varones = 0
promedio_general = 0
promedio_mujeres = 0
promedio_varones = 0
total_personas = 0
persona_joven = 0

edades = [] 

n = int (input ('Ingresa el valor de numero de personas: '))
for i in range (1, n + 1):
    print ('PROCESO ' + repr (i))
    edad = int (input ('Ingresa el valor de edad: '))
    
             
    print ('Selecciona el valor de sexo.')
    print ('\t1.- masculino')
    print ('\t2.- femenino')
    sys.stdout.write ('\t')
    sexo = 0
    while sexo<1 or sexo>2 or edad <= 18:
        sexo = int (input (': '))
        if sexo<1 or sexo>2:
            sys.stdout.write ('Valor incorrecto. Ingr\u00E9salo nuevamente.')
        
        if edad <= 18: 
             sys.stdout.write('No se permiten menores de edad!!')
             
    if sexo==1:
        varones=varones+1
        promedio_varones=promedio_varones+edad
    else:
        mujeres=mujeres+1
        promedio_mujeres=promedio_mujeres+edad
    promedio_general=promedio_general+edad
    edades.append(edad);
    print ()
if n == 0:
    porcentaje_mujeres = 0
else:
    porcentaje_mujeres=100.0*mujeres/n
if n == 0:
    porcentaje_varones = 0
else:
    porcentaje_varones=100.0*varones/n
if n == 0:
    promedio_general = 0
else:
    promedio_general=promedio_general/n
if mujeres == 0:
    promedio_mujeres = 0
else:
    promedio_mujeres=promedio_mujeres/mujeres
if varones == 0:
    promedio_varones = 0
else:
    promedio_varones=promedio_varones/varones
total_personas=n


print ('Valor de mujeres: ' + repr (mujeres))
print ('Valor de varones: ' + repr (varones))
print ('Valor de porcentaje mujeres: ' + repr (porcentaje_mujeres))
print ('Valor de porcentaje varones: ' + repr (porcentaje_varones))
print ('Valor de promedio general: ' + repr (promedio_general))
print ('Valor de promedio mujeres: ' + repr (promedio_mujeres))
print ('Valor de promedio varones: ' + repr (promedio_varones))
print ('Edad de la persona mas joven: ' + repr (min(edades)))
print ('Valor de total personas en la fiesta: ' + repr (total_personas))
os.system ('pause')