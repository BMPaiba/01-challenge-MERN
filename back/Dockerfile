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

ARG MONGODB_URL
ENV MONGODB_URL=$MONGODB_URL
ARG JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET



# Comando de inicio
CMD ["bun", "run", "start"]
