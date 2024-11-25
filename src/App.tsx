import { Button } from '@/lib';

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-3xl font-bold text-center">shadcn/ui Library</h1>
        <p className="text-center text-muted-foreground">
          All components are now available through the library exports
        </p>
        <div className="flex justify-center">
          <Button>Example Button</Button>
        </div>
      </div>
    </div>
  );
}

export default App;