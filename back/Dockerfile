# Usa la imagen oficial de Bun
FROM oven/bun:latest

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . . 

# Instala las dependencias con Bun
RUN bun install

# Construye el proyecto si es necesario
RUN bun run build

# Comando de inicio
CMD ["bun", "run", "start"]
