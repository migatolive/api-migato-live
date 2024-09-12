import app from './config/express.js';
import {port} from './config/vars.js';
import initModels from './loaders/index.js';

// Inicializar modelos y sincronizar base de datos
initModels().then(() => {
    // Iniciar el servidor
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to initialize models:', error);
});