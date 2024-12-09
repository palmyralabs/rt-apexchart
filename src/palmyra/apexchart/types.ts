type converter = (d: any) => any;

interface DataTransformer {
    preProcess?: converter, 
    postProcess?: converter,
    xScaleProcess?: converter,
    yScaleProcess?: converter,
    rScaleProcess?: converter
}