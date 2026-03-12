import { useRef, useCallback } from 'react';
import { Box, Flex, Text, Dialog, IconButton, Badge } from '@radix-ui/themes';
import { Cross1Icon } from '@radix-ui/react-icons';

/**
 * Source code viewer dialog.
 *
 * Receives pre-highlighted HTML from DocContent.source(file),
 * splits into lines, renders with line numbers, and auto-scrolls
 * to the target line.
 */
export function SourceView({ open, onClose, file, highlightedHtml, targetLine }) {
  const scrollRef = useRef(null);

  // Callback ref: when the target row mounts into the DOM, scroll to it.
  // This fires reliably after React inserts the element, regardless of
  // Radix Dialog animation timing.
  const targetCallbackRef = useCallback((node) => {
    if (node) {
      // requestAnimationFrame ensures the dialog body has layout
      requestAnimationFrame(() => {
        node.scrollIntoView({ block: 'center' });
      });
    }
  }, []);

  if (!open) return null;

  // Split highlighted HTML into lines
  const lines = highlightedHtml ? highlightedHtml.split(/\r?\n/) : null;

  return (
    <Dialog.Root open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <Dialog.Content className="source-dialog" size="4">
        <Flex justify="between" align="center" className="source-dialog-header">
          <Flex align="center" gap="2">
            <Badge variant="surface" color="gray" size="1">source</Badge>
            <Text size="2" weight="bold" className="source-dialog-filename">{file}</Text>
            {targetLine && (
              <Text size="1" color="gray">line {targetLine}</Text>
            )}
          </Flex>
          <IconButton variant="ghost" color="gray" size="1" onClick={onClose}>
            <Cross1Icon />
          </IconButton>
        </Flex>
        <Box className="source-dialog-body" ref={scrollRef}>
          {lines ? (
            <table className="source-table">
              <tbody>
                {lines.map((lineHtml, i) => {
                  const lineNum = i + 1;
                  const isTarget = lineNum === targetLine;
                  return (
                    <tr
                      key={lineNum}
                      ref={isTarget ? targetCallbackRef : undefined}
                      className={`source-line ${isTarget ? 'source-line--target' : ''}`}
                      id={`source-L${lineNum}`}
                    >
                      <td className="source-line-num">{lineNum}</td>
                      <td
                        className="source-line-code"
                        dangerouslySetInnerHTML={{ __html: lineHtml || '&nbsp;' }}
                      />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Flex align="center" justify="center" py="9">
              <Text size="2" color="gray">Source not available for this file.</Text>
            </Flex>
          )}
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
}

/**
 * Clickable source reference link.
 * Usage: <SourceRef file="foo.js" line={42} onClick={handler} />
 */
export function SourceRef({ file, line, onClick }) {
  if (!file) return null;

  const label = line ? `${file}:${line}` : file;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick(file, line);
  }, [file, line, onClick]);

  return (
    <button className="source-ref-link" onClick={handleClick} title="View source">
      {label}
    </button>
  );
}
