ExcelConfigPhpSpreadAruba
=================

Configuración de estructura para el leer un archvio excel en Aruba Instant On 

Paso 1
----

Agregar nuestra configuración de columnas en una clase 

```Configure columns 

     /**
     * @var UploadExcelManager
     */
    private $uploadExcelManager;

    public function __construct(UploadExcelManager $uploadExcelManager)
    {
        $this->uploadExcelManager = $uploadExcelManager;
    }
    
    public function configureColumns()
    {
        $this->uploadExcelManager->add('example', [
                'aliases' => [
                    'example1', //posibles alias que pueda tener la cabecera 
                    'example_1',
                ],
                'formatter' =>  function ($value) { // si queremos trabajar y convertir el valor
                    if ($value != "NA") {
                        return Date::excelToDateTimeObject($value);
                    }
                },
                'required => true,
                'similar' => true, // que sean iguales 
                'noDuplicate' => true // quiere decir que aceptamos de que no  se pueda duplicar en una columna 
            ]
        );
 .......
```
Paso 2
----

 llamar ese metodo declarado en nuestra clase en donde vayamos a leer el archivo:
 ```
   $exampleClass->configureColumns();
   
 ```
    

Luego de ello, llamar la clase  **UploadExcelManager.php**:

```php
  
$this->uploadExcelManager->readData(UploadedFile $file, ?User $user, array $options);

```
    - file: tiene que ser un xlxs 
    - user: objeto usuario ()
    - array de opciones: 
                ['row_headers' => 1,# desde donde empezar a leer 
                 'excelFormatNew' => true, # si nuestro excel inicia desde la comuna B (en el formato nuevo inicia desde B)
                   ......
                ] 
    



Por ultimo retorna un arreglo de arreglos  con la data segun con las cabeceras que haya hecho matchm y podemos obtener en base el resume y el upload file:

  [
  0 => [
    "serialNumber" => 5456564
    "accessPointType" => "ARUBA AP"
    "validFrom" => null
    "validTo" => null
  ]
  
 ]
 
 getResume();
 getUploadedFile();
 ....


